# SIM800L GPS/GPRS AT Commands

{% file src="../../.gitbook/assets/SIM800_Series_AT_Command_Manual_V1.09.pdf" %}


SIM800 Series_AT Command
Manual_V1.09 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 2 2015-08-03
Document Title: SIM800 Series AT Command Manual
Version: 1.09
Date: 2015-08-03
Status: Release
Document Control ID: SIM800 Series_AT Command Manual_V1.09
General Notes
SIMCom offers this information as a service to its customers, to support application and
engineering efforts that use the products designed by SIMCom. The information provided is based
upon requirements specifically provided to SIMCom by the customers. SIMCom has not
undertaken any independent search for additional relevant information, including any information
that may be in the customer’s possession. Furthermore, system validation of this product designed
by SIMCom within a larger electronic system remains the responsibility of the customer or the
customer’s system integrator. All specifications supplied herein are subject to change.
Copyright
This document contains proprietary technical information which is the property of Shanghai
SIMCom Wireless Solutions Ltd, copying of this document and giving it to others and the using or
communication of the contents thereof, are forbidden without express authority. Offenders are
liable to the payment of damages. All rights reserved in the event of grant of a patent or the
registration of a utility model or design. All specification supplied herein are subject to change
without notice at any time.
Copyright © Shanghai SIMCom Wireless Solutions Ltd. 2015 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 3 2015-08-03
Contents
Version History.........................................................................................14
1 Introduction............................................................................................22
1.1 Scope of the document .......................................................................................22
1.2 Related documents..............................................................................................22
1.3 Conventions and abbreviations ..........................................................................22
1.4 AT Command syntax ..........................................................................................22
1.4.1 Basic syntax ...................................................................................................................23
1.4.2 S Parameter syntax.........................................................................................................23
1.4.3 Extended Syntax.............................................................................................................23
1.4.4 Combining AT commands on the same Command line.................................................23
1.4.5 Entering successive AT commands on separate lines.....................................................24
1.5 Supported character sets.....................................................................................24
1.6 Flow control .......................................................................................................24
1.6.1 Software flow control (XON/XOFF flow control).........................................................24
1.6.2 Hardware flow control (RTS/CTS flow control)............................................................25
1.7 Definitions ..........................................................................................................25
1.7.1 Parameter Saving Mode .................................................................................................25
1.7.2 Max Response Time.......................................................................................................26
2 AT Commands According to V.25TER ................................................27
2.1 Overview of AT Commands According to V.25TER .........................................27
2.2 Detailed Description of AT Commands According to V.25TER ........................28
2.2.1 A/ Re-issues the Last Command Given.......................................................................28
2.2.2 ATA Answer an Incoming Call....................................................................................28
2.2.3 ATD Mobile Originated Call to Dial A Number..........................................................29
2.2.4 ATD><n> Originate Call to Phone Number in Current Memory................................31
2.2.5 ATD><str> Originate Call to Phone Number in Memory Which Corresponds to
Field <str>...............................................................................................................................32
2.2.6 ATDL Redial Last Telephone Number Used...............................................................34
2.2.7 ATE Set Command Echo Mode ..................................................................................35
2.2.8 ATH Disconnect Existing Connection.........................................................................35
2.2.9 ATI Display Product Identification Information .........................................................35
2.2.10 ATL Set Monitor speaker loudness............................................................................36
2.2.11 ATM Set Monitor Speaker Mode ..............................................................................36
2.2.12 +++ Switch from Data Mode or PPP Online Mode to Command Mode ..................36
2.2.13 ATO Switch from Command Mode to Data Mode....................................................37
2.2.14 ATP Select Pulse Dialling..........................................................................................37
2.2.15 ATQ Set Result Code Presentation Mode..................................................................38
2.2.16 ATS0 Set Number of Rings before Automatically Answering the Call.....................38
2.2.17 ATS3 Set Command Line Termination Character .....................................................39 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 4 2015-08-03
2.2.18 ATS4 Set Response Formatting Character ................................................................39
2.2.19 ATS5 Set Command Line Editing Character.............................................................40
2.2.20 ATS6 Pause Before Blind Dialling............................................................................41
2.2.21 ATS7 Set Number of Seconds to Wait for Connection Completion..........................41
2.2.22 ATS8 Set Number of Seconds to Wait for Comma Dial Modifier Encountered in
Dial String of D Command .....................................................................................................42
2.2.23 ATS10 Set Disconnect Delay after Indicating the Absence of Data Carrier..............42
2.2.24 ATT Select Tone Dialing ...........................................................................................43
2.2.25 ATV TA Response Format .......................................................................................43
2.2.26 ATX Set CONNECT Result Code Format and Monitor Call Progress .....................44
2.2.27 ATZ Reset Default Configuration .............................................................................45
2.2.28 AT&C Set DCD Function Mode ...............................................................................45
2.2.29 AT&D Set DTR Function Mode................................................................................46
2.2.30 AT&F Factory Defined Configuration ......................................................................46
2.2.31 AT&V Display Current Configuration ......................................................................47
2.2.32 AT&W Store Active Profile ......................................................................................47
2.2.33 AT+GCAP Request Complete TA Capabilities List ..................................................49
2.2.34 AT+GMI Request Manufacturer Identification .........................................................49
2.2.35 AT+GMM Request TA Model Identification ............................................................50
2.2.36 AT+GMR Request TA Revision Identification of Software Release.........................50
2.2.37 AT+GOI Request Global Object Identification.........................................................51
2.2.38 AT+GSN Request TA Serial Number Identification (IMEI) .....................................51
2.2.39 AT+ICF Set TE-TA Control Character Framing........................................................52
2.2.40 AT+IFC Set TE-TA Local Data Flow Control ..........................................................53
2.2.41 AT+IPR Set TE-TA Fixed Local Rate .......................................................................54
2.2.42 AT+HVOIC Disconnect Voice Call Only..................................................................55
3 AT Commands According to 3GPP TS 27.007.....................................56
3.1 Overview of AT Command According to 3GPP TS 27.007 ...............................56
3.2 Detailed Descriptions of AT Command According to 3GPP TS 27.007 ............57
3.2.1 AT+CACM Accumulated Call Meter (ACM) Reset or Query....................................57
3.2.2 AT+CAMM Accumulated Call Meter Maximum (ACM max) Set or Query .............58
3.2.3 AT+CAOC Advice of Charge .....................................................................................59
3.2.4 AT+CBST Select Bearer Service Type........................................................................60
3.2.5 AT+CCFC Call Forwarding Number and Conditions Control....................................61
3.2.6 AT+CCWA Call Waiting Control ................................................................................63
3.2.7AT+CEER Extended Error Report ...............................................................................64
3.2.8 AT+CGMI Request Manufacturer Identification ........................................................67
3.2.9 AT+CGMM Request Model Identification..................................................................67
3.2.10 AT+CGMR Request TA Revision Identification of Software Release......................68
3.2.11 AT+CGSN Request Product Serial Number Identification (Identical with +GSN)...68
3.2.12 AT+CSCS Select TE Character Set...........................................................................69
3.2.13 AT+CSTA Select Type of Address ............................................................................70
3.2.14 AT+CHLD Call Hold and Multiparty........................................................................70 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 5 2015-08-03
3.2.15 AT+CIMI Request International Mobile Subscriber Identity....................................71
3.2.16 AT+CLCC List Current Calls of ME.........................................................................72
3.2.17 AT+CLCK Facility Lock...........................................................................................73
3.2.18 AT+CLIP Calling Line Identification Presentation ...................................................75
3.2.19 AT+CLIR Calling Line Identification Restriction.....................................................76
3.2.20 AT+CMEE Report Mobile Equipment Error.............................................................77
3.2.21 AT+COLP Connected Line Identification Presentation ............................................78
3.2.22 AT+COPS Operator Selection...................................................................................80
3.2.23 AT+CPAS Phone Activity Status...............................................................................81
3.2.24 AT+CPBF Find Phonebook Entries...........................................................................82
3.2.25 AT+CPBR Read Current Phonebook Entries ............................................................83
3.2.26 AT+CPBS Select Phonebook Memory Storage.........................................................84
3.2.27 AT+CPBW Write Phonebook Entry..........................................................................85
3.2.28 AT+CPIN Enter PIN..................................................................................................86
3.2.29 AT+CPWD Change Password...................................................................................87
3.2.30 AT+CR Service Reporting Control ...........................................................................88
3.2.31 AT+CRC Set Cellular Result Codes for Incoming Call Indication ...........................89
3.2.32 AT+CREG Network Registration..............................................................................90
3.2.33 AT+CRLP Select Radio Link Protocol Parameters ...................................................92
3.2.34 AT+CRSM Restricted SIM Access ...........................................................................92
3.2.35 AT+CSQ Signal Quality Report ................................................................................93
3.2.36 AT+VTD Tone Duration............................................................................................94
3.2.37 AT+VTS DTMF and Tone Generation......................................................................95
3.2.38 AT+CMUX Multiplexer Control...............................................................................96
3.2.39 AT+CNUM Subscriber Number................................................................................97
3.2.40 AT+CPOL Preferred Operator List............................................................................98
3.2.41 AT+COPN Read Operator Names.............................................................................99
3.2.42 AT+CFUN Set Phone Functionality........................................................................100
3.2.43 AT+CCLK Clock.....................................................................................................101
3.2.44 AT+CSIM Generic SIM Access ..............................................................................101
3.2.45 AT+CALM Alert Sound Mode................................................................................102
3.2.46 AT+CALS Alert Sound Select.................................................................................103
3.2.47 AT+CRSL Ringer Sound Level...............................................................................104
3.2.48 AT+CLVL Loud Speaker Volume Level .................................................................104
3.2.49 AT+CMUT Mute Control........................................................................................105
3.2.50 AT+CPUC Price Per Unit and Currency Table........................................................106
3.2.51 AT+CCWE Call Meter Maximum Event ................................................................107
3.2.52 AT+CBC Battery Charge.........................................................................................108
3.2.53 AT+CUSD Unstructured Supplementary Service Data...........................................108
3.2.54 AT+CSSN Supplementary Services Notification....................................................109
4 AT Commands According to 3GPP TS 27.005...................................112
4.1 Overview of AT Commands According to 3GPP TS 27.005............................112
4.2 Detailed Descriptions of AT Commands According to 3GPP TS 27.005.........112
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 6 2015-08-03
4.2.1 AT+CMGD Delete SMS Message.............................................................................112
4.2.2 AT+CMGF Select SMS Message Format .................................................................113
4.2.3 AT+CMGL List SMS Messages from Preferred Store..............................................114
4.2.4 AT+CMGR Read SMS Message...............................................................................117
4.2.5 AT+CMGS Send SMS Message................................................................................120
4.2.6 AT+CMGW Write SMS Message to Memory ..........................................................121
4.2.7 AT+CMSS Send SMS Message from Storage ..........................................................123
4.2.8 AT+CNMI New SMS Message Indications ..............................................................124
4.2.9 AT+CPMS Preferred SMS Message Storage ............................................................126
4.2.10 AT+CRES Restore SMS Settings............................................................................127
4.2.11 AT+CSAS Save SMS Settings ................................................................................128
4.2.12 AT+CSCA SMS Service Center Address ................................................................129
4.2.13 AT+CSCB Select Cell Broadcast SMS Messages...................................................130
4.2.14 AT+CSDH Show SMS Text Mode Parameters .......................................................131
4.2.15 AT+CSMP Set SMS Text Mode Parameters ...........................................................132
4.2.16 AT+CSMS Select Message Service.........................................................................133
5 AT Commands for SIM Application Toolkit ......................................135
5.1 Overview ..........................................................................................................135
5.2 Detailed Descriptions of Commands................................................................135
5.2.1 AT+STKTRS STK Terminal Response.....................................................................135
5.2.2 AT+STKENVS STK Envelope Command................................................................136
5.2.3 AT+STKCALL STK call setup .................................................................................137
5.2.4 AT+STKSMS STK SMS delivery.............................................................................138
5.2.5 AT+STKSS STK SS setup ........................................................................................138
5.2.6 AT+STKUSSD STK USSD setup.............................................................................139
5.2.7 AT+STKDTMF STK sending DTMF .......................................................................139
5.2.8 +STKPCI STK Proactive Command Indication .......................................................140
5.2.9 AT+STKMENU STK Main menu command ............................................................141
5.2.10 AT+STKPCIS STK URC switch command ............................................................141
6 AT Commands Special for SIMCom ..................................................143
6.1 Overview ..........................................................................................................143
6.2 Detailed Descriptions of Commands................................................................145
6.2.1 AT+SIDET Change the Side Tone Gain Level.......................................................145
6.2.2 AT+CPOWD Power off............................................................................................146
6.2.3 AT+SPIC Times Remained to Input SIM PIN/PUK.................................................146
6.2.4 AT+CMIC Change the Microphone Gain Level.......................................................146
6.2.5 AT+CALA Set Alarm Time......................................................................................148
6.2.6 AT+CALD Delete Alarm..........................................................................................149
6.2.7 AT+CADC Read ADC .............................................................................................149
6.2.8 AT+CSNS Single Numbering Scheme .....................................................................150
6.2.9 AT+CDSCB Reset Cell Broadcast............................................................................151
6.2.10 AT+CMOD Configure Alternating Mode Calls .....................................................151 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 7 2015-08-03
6.2.11 AT+CFGRI Indicate RI When Using URC ............................................................151
6.2.12 AT+CLTS Get Local Timestamp............................................................................152
6.2.13 AT+CLDTMF Local DTMF Tone Generation.......................................................154
6.2.14 AT+CDRIND CS Voice/Data Call Termination Indication ...................................155
6.2.15 AT+CSPN Get Service Provider Name from SIM ..................................................156
6.2.16 AT+CCVM Get and Set the Voice Mail Number on the SIM .................................156
6.2.17 AT+CBAND Get and Set Mobile Operation Band .................................................157
6.2.18 AT+CHF Configure Hands Free Operation.............................................................158
6.2.19 AT+CHFA Swap the Audio Channels .....................................................................159
6.2.20 AT+CSCLK Configure Slow Clock ........................................................................160
6.2.21 AT+CENG Switch on or off Engineering Mode .....................................................161
6.2.22 AT+SCLASS0 Store Class 0 SMS to SIM When Received Class 0 SMS ..............163
6.2.23 AT+CCID Show ICCID ..........................................................................................164
6.2.24 AT+CMTE Set Critical Temperature Operating Mode or Query Temperature......164
6.2.25 AT+CMGDA Delete All SMS................................................................................165
6.2.26 AT+STTONE Play SIM Toolkit Tone....................................................................166
6.2.27 AT+SIMTONE Generate Specifically Tone...........................................................167
6.2.28 AT+CCPD Enable or Disable Alpha String............................................................168
6.2.29 AT+CGID Get SIM Card Group Identifier.............................................................168
6.2.30 AT+MORING Show State of Mobile Originated Call............................................169
6.2.31 AT+CMGHEX Enable or Disable Sending Non-ASCII Character SMS ...............170
6.2.32 AT+CCODE Configure SMS Code Mode..............................................................170
6.2.33 AT+CIURC Enable or Disable Initial URC Presentation .......................................171
6.2.34 AT+CPSPWD Change PS Super Password ............................................................172
6.2.35 AT+EXUNSOL Enable or Disable Proprietary Unsolicited Indications.................172
6.2.36 AT+CGMSCLASS Change GPRS Multislot Class ................................................173
6.2.37 AT+CDEVICE View Current Flash Device Type..................................................174
6.2.38 AT+CCALR Call Ready Query ..............................................................................174
6.2.39 AT+GSV Display Product Identification Information.............................................174
6.2.40 AT+SGPIO Control the GPIO.................................................................................175
6.2.41 AT+SPWM Generate the Pulse-Width-Modulation ................................................176
6.2.42 AT+ECHO Echo Cancellation Control ...................................................................176
6.2.43 AT+CAAS Control Auto Audio Switch ..................................................................177
6.2.44 AT+SVR Configure Voice Coding Type for Voice Calls.........................................178
6.2.45 AT+GSMBUSY Reject Incoming Call....................................................................179
6.2.46 AT+CEMNL Set the List of Emergency Number ...................................................180
6.2.47 AT*CELLLOCK Set the List of ARFCN Which Needs to Be Locked...................181
6.2.48 AT+SLEDS Set the Timer Period of Net Light .......................................................182
6.2.49 AT+CBUZZERRING Use the Buzzer Sound as the Incoming Call Ring...............183
6.2.50 AT+CEXTERNTONE Close or Open the Microphone...........................................183
6.2.51 AT+CNETLIGHT Close the Net Light or Open It to Shining ................................184
6.2.52 AT+CWHITELIST Set the White List ....................................................................185
6.2.53 AT+CSDT Switch on or off Detecting SIM Card...................................................186
6.2.54 AT+CSMINS SIM Inserted Status Reporting.........................................................186 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 8 2015-08-03
6.2.55 AT+CSGS Netlight Indication of GPRS Status .....................................................187
6.2.56 AT+CMICBIAS Close or Open the MICBIAS ......................................................188
6.2.57 AT+DTAM Set TTS and RECORD Play Mode in Call .........................................189
6.2.58 AT+SJDR Set Jamming Detection Function ...........................................................189
6.2.59 AT+CPCMCFG Set PCM Parameter ......................................................................191
6.2.60 AT+CPCMSYNC Set PCM Sync Parameter...........................................................192
6.2.61 AT+CANT Antenna Detecting ................................................................................193
6.2.62 AT+CAGCSET Close or Open AGC Function .......................................................194
6.2.63 AT+SD2PCM SD and PCM Switch Function.........................................................194
6.2.64 AT+SKPD Keypad Detecting Function...................................................................195
6.2.65 AT+SIMTONEX Custom Tones ...............................................................................196
6.2.66 AT+CROAMING Roaming State..............................................................................197
6.2.67 AT+CNETSCAN Perform a Net Survey to Show All the Cells’ Information...........197
6.2.68 AT+CMNRP Dual Serial Port Feature....................................................................198
6.2.69 AT+CEGPRS Switch on or off EDGE ...................................................................199
6.2.70 AT+CGPIO Control the GPIO by PIN Index ..........................................................200
6.2.71 AT+CMEDPLAY Play Audio File ..........................................................................201
6.2.72 AT+CMEDIAVOL Control the Volume when Playing Audio File..........................202
6.2.73 AT+SNDLEVEL Set the Sound Level of Special AT Command ............................202
6.2.74 AT+ECHARGE Charge Control.............................................................................203
6.2.75 AT+SIMTIMER Modify the Poll Interval Time Requested by SIM Card .............204
6.2.76 AT+SPE Speech Enhancement Control..................................................................204
6.2.77 AT+CCONCINDEX Report Concatenated SMS Index..........................................205
6.2.78 AT+SDMODE SD Mode Switch Function .............................................................205
6.2.79 AT+SRSPT Control SMS Retransmission..............................................................206
7 AT Commands for GPRS Support ......................................................208
7.1 Overview of AT Commands for GPRS Support...............................................208
7.2 Detailed Descriptions of AT Commands for GPRS Support............................208
7.2.1 AT+CGATT Attach or Detach from GPRS Service ..................................................208
7.2.2 AT+CGDCONT Define PDP Context.......................................................................209
7.2.3 AT+CGQMIN Quality of Service Profile (Minimum Acceptable) ...........................210
7.2.4 AT+CGQREQ Quality of Service Profile (Requested) .............................................211
7.2.5 AT+CGACT PDP Context Activate or Deactivate....................................................213
7.2.6 AT+CGDATA Enter Data State .................................................................................214
7.2.7 AT+CGPADDR Show PDP Address .........................................................................214
7.2.8 AT+CGCLASS GPRS Mobile Station Class.............................................................215
7.2.9 AT+CGEREP Control Unsolicited GPRS Event Reporting......................................216
7.2.10 AT+CGREG Network Registration Status ..............................................................217
7.2.11 AT+CGSMS Select Service for MO SMS Messages ..............................................218
8 AT Commands for TCPIP Application Toolkit ..................................220
8.1 Overview ..........................................................................................................220
8.2 Detailed Descriptions of Commands................................................................221
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 9 2015-08-03
8.2.1 AT+CIPMUX Start Up Multi-IP Connection ............................................................221
8.2.2 AT+CIPSTART Start Up TCP or UDP Connection...................................................221
8.2.3 AT+CIPSEND Send Data Through TCP or UDP Connection...................................223
8.2.4 AT+CIPQSEND Select Data Transmitting Mode .....................................................225
8.2.5 AT+CIPACK Query Previous Connection Data Transmitting State..........................226
8.2.6 AT+CIPCLOSE Close TCP or UDP Connection .....................................................227
8.2.7 AT+CIPSHUT Deactivate GPRS PDP Context ........................................................227
8.2.8 AT+CLPORT Set Local Port.....................................................................................228
8.2.9 AT+CSTT Start Task and Set APN, USER NAME, PASSWORD...........................229
8.2.10 AT+CIICR Bring Up Wireless Connection with GPRS or CSD .............................230
8.2.11 AT+CIFSR Get Local IP Address............................................................................230
8.2.12 AT+CIPSTATUS Query Current Connection Status ...............................................231
8.2.13 AT+CDNSCFG Configure Domain Name Server...................................................232
8.2.14 AT+CDNSGIP Query the IP Address of Given Domain Name...............................233
8.2.15 AT+CIPHEAD Add an IP Head at the Beginning of a Package Received..............234
8.2.16 AT+CIPATS Set Auto Sending Timer .....................................................................234
8.2.17 AT+CIPSPRT Set Prompt of ‘>’ When Module Sends Data...................................235
8.2.18 AT+CIPSERVER Configure Module as Server ......................................................236
8.2.19 AT+CIPCSGP Set CSD or GPRS for Connection Mode ........................................237
8.2.20 AT+CIPSRIP Show Remote IP Address and Port When Received Data ................238
8.2.21 AT+CIPDPDP Set Whether to Check State of GPRS Network Timing ..................239
8.2.22 AT+CIPMODE Select TCPIP Application Mode....................................................239
8.2.23 AT+CIPCCFG Configure Transparent Transfer Mode............................................240
8.2.24 AT+CIPSHOWTP Display Transfer Protocol in IP Head When Received Data.....241
8.2.25 AT+CIPUDPMODE UDP Extended Mode.............................................................242
8.2.26 AT+CIPRXGET Get Data from Network Manually ...............................................243
8.2.27 AT+CIPSCONT Save TCPIP Application Context .................................................245
8.2.28 AT+CIPRDTIMER Set Remote Delay Timer ........................................................246
8.2.29 AT+CIPSGTXT Select GPRS PDP context ...........................................................247
8.2.30 AT+CIPTKA Set TCP Keepalive Parameters.........................................................248
9 AT Commands for IP Application.......................................................249
9.1 Overview ..........................................................................................................249
9.2 Detailed Descriptions of Commands................................................................249
9.2.1 AT+SAPBR Bearer Settings for Applications Based on IP.......................................249
10 AT Commands for PING Support .....................................................251
10.1 Overview ........................................................................................................251
10.2 Detailed Descriptions of Commands..............................................................251
10.2.1 AT+CIPPING PING Request..................................................................................251
10.2.2 AT+CIPCTL Set the Mode When Receiving an IP Packet .....................................252
10.2.3 AT+CIPFLT Set the Rules of IP Filter ....................................................................253
10.2.4 AT+CIPBEIPING Set the Module to be PING or Not............................................254
11 AT Commands for HTTP Application ..............................................256
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 10 2015-08-03
11.1 Overview ........................................................................................................256
11.2 Detailed Descriptions of Commands..............................................................256
11.2.1 AT+HTTPINIT Initialize HTTP Service .................................................................256
11.2.2 AT+HTTPTERM Terminate HTTP Service ............................................................257
11.2.3 AT+HTTPPARA Set HTTP Parameters Value ........................................................257
11.2.4 AT+HTTPDATA Input HTTP Data .........................................................................259
11.2.5 AT+HTTPACTION HTTP Method Action .............................................................259
11.2.6 AT+HTTPREAD Read the HTTP Server Response................................................261
11.2.7 AT+HTTPSCONT Save HTTP Application Context ..............................................262
11.2.8 AT+HTTPSTATUS Read HTTP Status ...................................................................263
11.2.9 AT+HTTPHEAD Read the HTTP Header Information of Server Response...........264
12 AT Commands for FTP Application .................................................265
12.1 Overview ........................................................................................................265
12.2 Detailed Descriptions of Commands..............................................................266
12.2.1 AT+FTPPORT Set FTP Control Port ......................................................................266
12.2.2 AT+FTPMODE Set Active or Passive FTP Mode ..................................................266
12.2.3 AT+FTPTYPE Set the Type of Data to Be Transferred...........................................267
12.2.4 AT+FTPPUTOPT Set FTP Put Type .......................................................................268
12.2.5 AT+FTPCID Set FTP Bearer Profile Identifier.......................................................268
12.2.6 AT+FTPREST Set Resume Broken Download .......................................................269
12.2.7 AT+FTPSERV Set FTP Server Address ..................................................................269
12.2.8 AT+FTPUN Set FTP User Name ............................................................................270
12.2.9 AT+FTPPW Set FTP Password...............................................................................271
12.2.10 AT+FTPGETNAME Set Download File Name ....................................................272
12.2.11 AT+FTPGETPATH Set Download File Path.........................................................272
12.2.12 AT+FTPPUTNAME Set Upload File Name .........................................................273
12.2.13 AT+FTPPUTPATH Set Upload File Path..............................................................273
12.2.14 AT+FTPGET Download File ................................................................................274
12.2.15 AT+FTPPUT Set Upload File ...............................................................................275
12.2.16 AT+FTPSCONT Save FTP Application Context ..................................................276
12.2.17 AT+FTPDELE Delete Specified File in FTP Server.............................................277
12.2.18 AT+FTPSIZE Get the Size of Specified File in FTP Server .................................278
12.2.19 AT+FTPSTATE Get the FTP State ........................................................................279
12.2.20 AT+FTPEXTPUT Extend Upload File.....................................................................279
12.2.21 AT+FTPMKD Make Directory on the Remote Machine ......................................280
12.2.22 AT+FTPRMD Remove Directory on the Remote Machine ..................................281
12.2.23 AT+FTPLIST List Contents of Directory on the Remote Machine.......................281
12.2.24 AT+FTPGETTOFS Download File and Save in File System ...............................282
12.2.25 AT+FTPPUTFRMFS Upload File from File System. ...........................................283
12.2.26 AT+FTPEXTGET Extend Download File ............................................................285
12.2.27 AT+FTPFILEPUT Load File in RAM from File System then Upolad with
FTPPUT ................................................................................................................................286
12.2.28 AT+FTPQUIT Quit Current FTP Session .............................................................287 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 11 2015-08-03
13 AT Commands for GSM Location Application ................................288
13.1 Overview ........................................................................................................288
13.2 Detailed Descriptions of Commands..............................................................288
13.2.1 AT+CIPGSMLOC GSM Location and Time ............................................................288
14 AT Commands for Email Application...............................................290
14.1 Overview ........................................................................................................290
14.2 Detailed Descriptions of Commands..............................................................291
14.2.1 AT+EMAILCID Set Email Bearer Profile Identifier..............................................291
14.2.2 AT+EMAILTO Set Timeout Value of SMTP/POP3 Server Response ..................291
14.2.3 AT+SMTPSRV Set SMTP Server Address and Port..............................................292
14.2.4 AT+SMTPAUTH Set User Name and Password for SMTP Authentication..........293
14.2.5 AT+SMTPFROM Set Sender Address and Name ..................................................294
14.2.6 AT+SMTPRCPT Set the Email Recipient(TO/CC/BCC) Address and Name........295
14.2.7 AT+SMTPSUB Set the Email Subject....................................................................296
14.2.8 AT+SMTPBODY Set the Email Body ...................................................................296
14.2.9 AT+SMTPFILE Set the Email Attachment ............................................................297
14.2.10 AT+SMTPSEND Send the Email.........................................................................298
14.2.11 AT+SMTPFT Transfer the Email Attachment ......................................................299
14.2.12 AT+SMTPCS Set the Email Charset ....................................................................300
14.2.13 AT+POP3SRV Set POP3 Server and Account .....................................................301
14.2.14 AT+POP3IN Log in POP3 Server ........................................................................302
14.2.15 AT+POP3NUM Get Email Number and Total Size..............................................302
14.2.16 AT+POP3LIST Get the Specific Email Size ........................................................303
14.2.17 AT+POP3UIDL Get the Specific Email Unique-id ..............................................304
14.2.18 AT+POP3CMD Get Multi-line Response.............................................................305
14.2.19 AT+POP3READ Read Multi-line Response ........................................................307
14.2.20 AT+POP3DEL Mark the Specific Email to Delete...............................................308
14.2.21 AT+POP3RSET Unmark the Emails that Be Marked as Deleted.........................309
14.2.22 AT+POP3OUT Log Out POP3 Server..................................................................310
15 AT Commands for MMS Application...............................................311
15.1 Overview ........................................................................................................311
15.2 Detailed Descriptions of Commands..............................................................312
15.2.1 AT+CMMSCURL Set the URL of the MMS Center..............................................312
15.2.2 AT+CMMSPROTO Set the Protocol Parameter and MMS Proxy .........................312
15.2.3 AT+CMMSCID Set the Network Parameters for MMS.........................................313
15.2.4 AT+CMMSSENDCFG Set the Parameters for Sending MMS ..............................314
15.2.5 AT+CMMSEDIT Enter or Exit Edit Mode.............................................................315
15.2.6 AT+CMMSDOWN Download the File Data or Title from UART.........................316
15.2.7 AT+CMMSDELFILE Delete the File of the Edited MMS by File Index...............317
15.2.8 AT+CMMSSEND Start MMS Sending..................................................................318
15.2.9 AT+CMMSRECP Add Recipients..........................................................................319 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 12 2015-08-03
15.2.10 AT+CMMSCC Add Copy Recipients...................................................................319
15.2.11 AT+CMMSBCC Add Secret Recipients...............................................................320
15.2.12 AT+CMMSDELRECP Delete Recipients ............................................................321
15.2.13 AT+CMMSDELCC Delete Copy Recipients .......................................................321
15.2.14 AT+CMMSDELBCC Delete Secret Recipients ...................................................322
15.2.15 AT+CMMSRECV Receive MMS ........................................................................323
15.2.16 AT+CMMSVIEW Get the MMS into Buffer and Show the Information.............324
15.2.17 AT+CMMSREAD Read the Given File of the MMS in the Buffer......................325
15.2.18 AT+CMMSRDPUSH Read the Information of the MMS PUSH Message..........325
15.2.19 AT+CMMSUA Set User Agent ............................................................................327
15.2.20 AT+CMMSPROFILE Set User Agent Profile ......................................................328
15.2.21 AT+CMMSTIMEOUT Set MMS Timeout...........................................................328
15.2.22 AT+CMMSSTATUS Get MMS Status ................................................................329
15.2.23 AT+CMMSINIT Initialize MMS Function...........................................................330
15.2.24 AT+CMMSTERM Exit MMS Function ...............................................................330
15.2.25 AT+CMMSSCONT Save MMS Context..............................................................331
16 AT Commands for DDET Application..............................................333
16.1 Overview ........................................................................................................333
16.2 Detailed Descriptions of Commands..............................................................333
16.2.1 AT+DDET DTMF Detection Control.....................................................................333
17 AT Commands for RECORD Application........................................335
17.1 Overview ........................................................................................................335
17.2 Detailed Descriptions of Commands..............................................................335
17.2.1 AT+CREC Record Operation..................................................................................335
17.2.2 AT+CRECORD Record and Send Data to UART...................................................338
18 AT Commands for TTS Application .................................................340
18.1 Overview ........................................................................................................340
18.2 Detailed Descriptions of Commands..............................................................340
18.2.1 AT+CTTS TTS Operation.......................................................................................340
18.2.2 AT+CTTSPARAM Set Parameters of the TTS Playing..........................................341
18.2.3 AT+CTTSRING Enable/Disable TTS Play During Incoming Call Ring................342
19 Supported Unsolicited Result Codes .................................................343
19.1 Summary of CME ERROR Codes .................................................................343
19.2 Summary of CMS ERROR Codes .................................................................346
19.3 Summary of Unsolicited Result Codes ..........................................................350
20 AT Commands Examples ..................................................................355
20.1 Profile Commands..........................................................................................355
20.2 SIM Commands..............................................................................................356
20.3 General Commands ........................................................................................358
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 13 2015-08-03
20.4 Call Control Commands.................................................................................359
20.5 SIM Toolkit Commands .................................................................................361
20.6 Audio Commands ...........................................................................................361
20.7 SMS Commands.............................................................................................361
20.8 GPRS Commands...........................................................................................362
20.9 TCPIP Commands ..........................................................................................364
20.10 IP Commands ...............................................................................................365
20.11 PING Commands..........................................................................................365
20.12 HTTP and FTP Commands ..........................................................................366
20.13 GSM Location Commands...........................................................................366
20.14 EMAIL Commands ......................................................................................367
20.15 MMS Commands .........................................................................................367
20.16 DDET Commands ........................................................................................368
20.17 RECORD Commands...................................................................................370
20.18 TTS Commands............................................................................................371
21 ATC Differences among SIM800 Series...........................................373
21.1 AT+SIDET......................................................................................................373
21.2 AT+CMIC.......................................................................................................373
21.3 AT+CBAND ...................................................................................................374
21.4 AT+CHFA.......................................................................................................374
21.5 AT+SGPIO......................................................................................................375
21.6 AT+SJDR........................................................................................................375
21.7 AT+CREC.......................................................................................................376
21.8 AT+CTTSPARAM .........................................................................................376
21.9 AT+CADC ......................................................................................................376
21.10 AT+CSCLK ..................................................................................................376
21.11 AT+CMMSDOWN.......................................................................................377
21.12 AT+CFGRI ...................................................................................................377
21.13 Only Part of Projects Support Following AT Commands ............................378
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 14 2015-08-03
Version History
Version Date Chapter What is new
V1.00 New version
All Modify GSM 07.05 to 3GPP TS 27.005,modify
GSM 07.07 to 3GPP TS 27.007
1.1 Scope of the document Add SIM800
2.2.8 ATH Delete ATH parameter [n]
2.2.12 +++ Change "0.5 second" to "1 second"
2.2.13 ATO Change "NO CARRIER" to "ERROR"
2.2.26 ATX Change default value from 0 to 4
2.2.32 AT&W Add AT+CFGRI,AT+CSGS
2.2.41.1 Auto-bauding Disable DTR auto-bauding
3.2.14 AT+CHLD Delete parameter of CHLD
3.2.18 AT+CLIP Change URC parameter
3.2.51 AT+CRSL Delete reference Note
3.2.7 AT+CEER Change description of 34 (emergency call not
possible)
4.2.10 AT+CRES Delete description of CSCB
4.2.11 AT+CSAS Delete description of CSCB
6.2.4 AT+CMIC Add reference Note
6.2.11 AT+CFGRI Add default value
6.2.16 AT+CCVM Modify Test Command response information
and parameter description
6.2.18 AT+CHF Add URC
6.2.26 AT+STTONE Change <duration> supported range;delete
reference note
6.2.27 AT+SIMTONE Modify last parameter of Test Command to
10-500000
6.2.48 AT+SLEDS Modify default value
6.2.55 AT+CSGS Add ATC
6.2.56 AT+CMICBIAS Add ATC
8.2.2 AT+CIPSTART Modify parameter
8.2.15 AT+CIPHEAD Modify parameter
8.2.20 AT+CIPSRIP Modify parameter
8.2.23 AT+CIPCCFG Modify write cmd parameters
V1.01 2013-07-23
8.2.26 AT+CIPRXGET Add "single IP & multi IP connection"
information 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 15 2015-08-03
9.2.1 AT+SAPBR Modify parameter
12.2.23 AT+FTPLIST Change "Execution Command" to "Write
Command"
14.2.8 AT+SMTPBODY Change "Execution Command" to "Write
Command"
14.2.10 AT+SMTPSEND Modify parameter
14.2.11 AT+SMTPFT Change "Execution Command" to "Write
Command"
15.2.15 AT+CMMSRECV Change reference note
15.2.21
AT+CMMSTIMEOUT
Change "milliseconds" to "seconds"
15.2.25 AT+CMMSSCONT Modify parameter of Execution Command
17.2.1 AT+CREC Add note
18.2.2 AT+CTTSPARAM Modify parameter;add note
20.8 GPRS Commands Modify the CGQREQ example
20.17 RECORD Commands Add example
3.2.17 AT+CLCK Add Max Response Time
3.2.22 AT+COPS Add Max Response Time
3.2.29 AT+CPWD Add Max Response Time
3.2.28 AT+CPIN Add Max Response Time
3.2.41 AT+VTS Add Max Response Time
3.2.44 AT+CPOL Add Max Response Time
3.2.45 AT+COPN Add Max Response Time
3.2.54 AT+CPUC Add Max Response Time
6.2.7 AT+CADC Add Max Response Time
6.2.23 AT+CCID Add Max Response Time
7.2.1 AT+CGATT Add Max Response Time
7.2.5 AT+CGACT Add Max Response Time
3.2.24 AT+CPBF Modify description of max response time
3.2.25 AT+CPBR Modify description of max response time
4.2.1 CMGD Modify description of max response time
4.2.3 CMGL Modify description of max response time
6.2.25 CMGDA Modify description of max response time
15.2.8 AT+CMMSSEND Modify description of max response time
15.2.15 AT+CMMSRECV Modify description of max response time
2.2.16 ATS0 Add parameter saving mode
2.2.20 ATS6 Add parameter saving mode
2.2.21 ATS7 Add parameter saving mode 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 16 2015-08-03
2.2.22 ATS8 Add parameter saving mode
2.2.26 ATX Add parameter saving mode
3.2.4 AT+CBST Add parameter saving mode
3.2.16 AT+CLCC Add parameter saving mode
3.2.12 AT+CSCS Add parameter saving mode
3.2.51 AT+CRSL Add parameter saving mode
3.2.52 AT+CLVL Add parameter saving mode
6.2.33 AT+CIURC Add parameter saving mode
6.2.53 AT_CSDT Add parameter saving mode
6.2.54 AT+CSMINS Add parameter saving mode
3.2.32 AT+CREG Modify parameter save mode
6.2.44 AT+SVR Modify parameter save mode
7.2.10 AT+CGREG Modify parameter save mode
3.2.24 AT+CPBS Delete parameter save mode
3.2.25 AT+CPBW Delete parameter save mode
2.2.28 AT&C Modify the format
3.2.5 AT+CCFC Change error word: <reads> to <reason>
3.2.33 AT+CRLP Add Save mode and reference
3.2.36 AT+FCLASS Modify information about +FCLASS
3.2.47 AT+CCLK Add note
4.2.5 AT+CMGS Add Note
6.2.18 AT+CHF Modify parameter range and note
6.2.19 AT+CHFA Add patameters of write command and test
command,modify note
6.2.20 AT+CSCLK Add new parameter and note
6.2.24 AT+CMTE Increase the temperature range
6.2.28 AT+CCPD Set default value
6.2.33 AT+CIURC Set default value
6.2.41 AT+SPWM Modify parameter direction and note
6.2.51 AT+CNETLIGHT Add test and read command
6.2.53 AT+CSDT Modify note
6.2.55 AT+CSGS Modify parameter default value
6.2.56 AT+CMICBIAS Add default value and modify parameter
description
6.2.57 AT+DTAM Add AT command
6.2.58 AT+SJDR Add AT command
6.2.59 AT+CPCMCFG Add AT command
V1.02 2013-10-23
6.2.60 AT+CPCMSYNC Add AT command
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 17 2015-08-03
6.2.61 AT+CANT Add AT command
6.2.62 AT+CAGCSET Add AT command
7.2.9 AT+CGEREP Modify parameter description and add URC
example
8.2.7 AT+CIPSHUT Add Max Response Time
8.2.10 AT+CIICR Add Max Response Time
8.2.21 AT+CIPDPDP Modify parameter’s scope
8.2.26 AT+CIPRXGET Modify parameter options
16.2.1 AT+DDET Add parameter and URC description in write
command,add note
17.2.1 AT+CREC Modify note
17.2.2 AT+CRECORD Add AT command
18.2.2 AT+CTTSPARAM Modify note and parameter default value
20.16 AT+DDET Modify AT+DDET example
21.5 AT+CTTSPARAM Add differences of some AT commands
21.6 AT+CHFA Add differences of some AT commands
AT+CEXTHS,AT+CEXBUT Delete
All Add or modify Parameter Saving Mode and
Max Response Time
1.1 Scope of the document Add SIM800G
2.2.28 AT&C Modify parameter format
2.2.32 AT&W Modify parameter stored by &W
2.2.41 AT+IPR Add parameter description
3.2.6 AT+CCWA Modify <status> decription
3.2.24 AT+CPBS Add “FD” phonebook
3.2.46 AT+CALS Add parameter <switch> for playing/stopping
tone
5.2.1 AT+STKTRS Modify the length of parameter
6.2.1 AT+SIDET Extend parameter <channel>
6.2.4 AT+CMIC Extend parameter <channel>, add default value
description in note
6.2.5 AT+CALA Modify indicate expired alarm
6.2.13 AT+CLDTMF
Extend parameter <DTMF string> and add
parameter <timeBase>, add the funcion that
local DTMF tone can be played in call.
6.2.56 AT+CMICBIAS Add note description
6.2.58 AT+SJDR Modify format error
6.2.63 AT+SD2PCM Add AT command
V1.03 2014-03-28
6.2.64 AT+SKPD Add AT command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 18 2015-08-03
6.2.65 AT+SIMTONEX Add AT command
6.2.66 AT+CROAMING Add AT command
6.2.67 AT+CNETSCAN Add AT command
8.2.23 AT+CIPCCFG Modify wait time’s interval
12.2.24 AT+FTPGETTOFS Add AT command
16.2.1 AT+DDET Modify description about <key> parameter, add
<ssdet> parameter
17.2.1 AT+CREC
Modify <location> and AT+CREC=8
description,add read length limit and AMR
support description in note
18.2.3 AT+CTTSRING Add command AT+CTTSRING
20.6 Audio command Add AT+CLDTMF example
20.11 PING Commands Add other device ping to the modem
21.6 AT+CHFA Modify description
21.7 AT+CMIC Add difference desription
21.8 AT+SIDET Add difference desription
AT+FCLASS
AT+FMI
AT+FMM
AT+FMR
Delete
1.1 Scope of the document Add SIM800W16, SIM840W16,
SIM800-WB64, SIM808
2.2.27 ATZ Modify note
2.2.30 AT&F Modify note
2.2.32 AT&W Modify note
3.2.46 AT+CALS Modify <switch> descripton
4.2.8 AT+CNMI Add the " [alpha>], " string
6.2.1 AT+SIDET Modify note
6.2.4 AT+CMIC Modify note
6.2.8 AT+CSNS Modify parameter save mode
6.2.13 AT+CLDTMF Modify note
6.2.17 AT+CBAND Modify note
6.2.18 AT+CHF Modify note
6.2.19 AT+CHFA Modify note
6.2.40 AT+SGPIO Modify note
6.2.41 AT+SPWM Extend the scope of parameter <freq> to
"0-100000"
6.2.58 AT+SJDR Modify note
V1.04 2014-06-10
6.2.59 AT+CPCMCFG Modify note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 19 2015-08-03
6.2.60 AT+CPCMSYNC Modify note
6.2.62 AT+CANT Modify note
6.2.63 AT+SD2PCM Modify note
6.2.64 AT+SKPD Modify note
6.2.66 AT+CROAMING Modify AT+CROAMING command’s format
6.2.67 AT+CNETSCAN Modify AT+CNETSCAN command’s function
and note
6.2.68 AT+CMNRP Add AT command
8.2.2 AT+CIPSTART Modify max response time
8.2.30 AT+CIPTKA Add AT command
10.2.4 AT+CIPBEIPING Add AT command
12.2.2 AT+FTPMODE Modify test and write command
12.2.14 AT+FTPGET Modify note, Add "Manual quit" to <error>
12.2.23 AT+FTPLIST Modify note
12.2.24 AT+FTPGETTOFS Add read command
12.2.25
AT+FTPPUTFRMFS
Add AT command
12.2.26 AT+FTPEXTGET Add AT command
12.2.27 AT+FTPFILEPUT Add AT command
12.2.28 AT+FTPQUIT Add AT command
13.2.1 AT+CIPGSMLOC Modify max response time
16.2.1 AT+DDET Modify response value of test command
17.2.1 AT+CREC Modify parameter description and note
18 Modify note
19.3 URC
Add URC of
AT+CGREG,AT+CALA,AT+CIURC,AT+CNMI
20.2 SIM commands Modify response of AT+CPBS=?
21 Modify ATC difference
21.4 AT+CHFA
Add PCM channel in SIM800 and
SIM800-WB64
All Change SIM800-WB64 to SIM800M64
6.2.21 AT+CENG Add format description of part parameters
6.2.40 AT+SGPIO Extend the scope of parameter <GPIO> to "1-7"
6.2.69 AT+CEGPRS Add AT command
12.2.24 AT+FTPGETTOFS Modify description of <loc>
14.2.14 AT+POP3IN Add description of <code> value 69
14.2.22 AT+POP3OUT Add description of <code> value 69
V1.05 2014-07-31
21.2 AT+CMIC Modify 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 20 2015-08-03
21.5 AT+SGPIO Modify difference
21.9 AT+CADC Add difference
21.10 AT+CSCLK Add difference
21.13 Add GPIO difference
6.2.52 AT+CWHITELIST Extend the scope of parameter <mode> to "0-3"
6.2.70 AT+CGPIO Add AT command
6.2.71 AT+CMEDPLAY Add AT command
6.2.72 AT+CMEDIAVOL Add AT command
8.2.14 AT+CDNSGIP Add error code
12.2 Modify max response time
17.2.1 AT+CREC Modify note
1.06 2014-10-28
19.3 Modify note
1.1 Scope of the document Add SIM800C
2.2.16 ATS0 Modify note
6.2.20 AT+CSCLK Modify note
6.2.73 AT+SNDLEVEL Add AT command
1.07 2014-12-19
21 Add differences of SIM800C
6.2.55 AT+CSGS Extend the scope of parameter <mode> to "0-2"
6.2.74 AT+ECHARGE Add AT command
6.2.75 AT+SIMTIMER Add AT command
6.2.76 AT+SPE Add AT command
17.2.1 AT+CREC Modify note
19.1 Change CME error codes from 810~824 to
600~614
1.08 2015-05-12
21.13 Add AT+ECHARGE,AT+SIMTIMER,AT+SPE
1.1 Scope of the document Add SIM800A, SIM800F, SIM800C-DS
6.2.21 AT+CENG Extend the scope of parameter <mode> to "0-4"
and modify note
6.2.65 AT+SIMTONEX Modify note
6.2.70 AT+CGPIO Modify response value of test command
6.2.71 AT+CMEDPLAY Modify note
6.2.77 AT+CCONCINDEX Add AT command
6.2.78 AT+SDMODE Add AT command
6.2.79 AT+SRSPT Add AT command
11.2.9 AT+HTTPHEAD Add AT command
15.2.6 AT+CMMSDOWN Modify <type> parameter
17.2.1 AT+CREC Modify note
1.09 2015-08-03
19.3 Delete URC of "AT+CENG" when <mode>=3 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 21 2015-08-03
20.2 SIM commands Add examples of "AT+CENG"
21.11 AT+CMMSDOWN Add difference of "AT+CMMSDOWN"
21.12 AT+CFGRI Add difference of "AT+CFGRI"
21 Add differences of SIM800A,SIM800F and
SIM800C-DS 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 22 2015-08-03
1 Introduction
1.1 Scope of the document
This document presents the AT Command Set for SIMCom SIM800 Series, including SIM800V,
SIM840V, SIM800W, SIM840W, SIM800W16, SIM840W16, SIM800L, SIM800H, SIM800,
SIM800M64, SIM800G, SIM808, SIM800C, SIM800A, SIM800F and SIM800C-DS.
1.2 Related documents
You can visit the SIMCom Website using the following link:
http://www.sim.com
1.3 Conventions and abbreviations
In this document, the GSM engines are referred to as following term:
ME (Mobile Equipment);
MS (Mobile Station);
TA (Terminal Adapter);
DCE (Data Communication Equipment) or facsimile DCE (FAX modem, FAX board);
In application, controlling device controls the GSM engine by sending AT Command via its
serial interface. The controlling device at the other end of the serial line is referred to as
following term:
TE (Terminal Equipment);
DTE (Data Terminal Equipment) or plainly "the application" which is running on an embedded
system;
1.4 AT Command syntax
The "AT" or "at" or “aT” or “At”prefix must be set at the beginning of each Command line. To
terminate a Command line enter <CR>.
Commands are usually followed by a response that includes.
"<CR><LF><response><CR><LF>"
Throughout this document, only the responses are presented, <CR><LF> are omitted
intentionally.
The AT Command set implemented by SIM800 Series is a combination of 3GPP TS 27.005,
3GPP TS 27.007 and ITU-T recommendation V.25ter and the AT commands developed by
SIMCom.
Note: A HEX string such as "00 49 49 49 49 FF FF FF FF" will be sent out through serial
port at the baud rate of 115200 immediately after SIM800 Series is powered on. The string 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 23 2015-08-03
shall be ignored since it is used for synchronization with PC tool. Only enter AT Command
through serial port after SIM800 Series is powered on and Unsolicited Result Code "RDY"
is received from serial port. If auto-bauding is enabled, the Unsolicited Result Codes
"RDY" and so on are not indicated when you start up the ME, and the "AT" prefix, or
"at" prefix must be set at the beginning of each command line.
All these AT commands can be split into three categories syntactically: "basic", "S parameter",
and "extended". These are as follows:
1.4.1 Basic syntax
These AT commands have the format of "AT<x><n>", or "AT&<x><n>", where "<x>"is the
Command, and "<n>"is/are the argument(s) for that Command. An example of this is "ATE<n>",
which tells the DCE whether received characters should be echoed back to the DTE according to
the value of "<n>". "<n>" is optional and a default will be used if missing.
1.4.2 S Parameter syntax
These AT commands have the format of "ATS<n>=<m>", where "<n>" is the index of the S
register to set, and "<m>"is the value to assign to it. "<m>" is optional; if it is missing, then a
default value is assigned.
1.4.3 Extended Syntax
These commands can operate in several modes, as in the following table:
Table 1: Types of AT commands and responses
Test Command AT+<x>=? The mobile equipment returns the list of parameters
and value ranges set with the corresponding Write
Command or by internal processes.
Read Command AT+<x>? This command returns the currently set value of the
parameter or parameters.
Write Command AT+<x>=<…> This command sets the user-definable parameter
values.
Execution Command AT+<x> The execution command reads non-variable
parameters affected by internal processes in the GSM
engine.
1.4.4 Combining AT commands on the same Command line
You can enter several AT commands on the same line. In this case, you do not need to type the
"AT" or "at" prefix before every command. Instead, you only need type "AT" or "at" the 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 24 2015-08-03
beginning of the command line. Please note to use a semicolon as the command delimiter after
an extended command; in basic syntax or S parameter syntax, the semicolon need not enter, for
example: ATE1Q0S0=1S3=13V1X4;+IFC=0,0;+IPR=115200;&W.
The Command line buffer can accept a maximum of 556 characters (counted from the first
command without “AT” or “at” prefix). If the characters entered exceeded this number then none
of the Command will executed and TA will return "ERROR".
1.4.5 Entering successive AT commands on separate lines
When you need to enter a series of AT commands on separate lines, please Note that you need to
wait the final response (for example OK, CME error, CMS error) of last AT Command you
entered before you enter the next AT Command.
1.5 Supported character sets
The SIM800 Series AT Command interface defaults to the IRA character set. The SIM800 Series
supports the following character sets:
GSM format
UCS2
HEX
IRA
PCCP
PCDN
8859-1
The character set can be set and interrogated using the "AT+CSCS" Command (3GPP TS
27.007). The character set is defined in GSM specification 3GPP TS 27.005.
The character set affects transmission and reception of SMS and SMS Cell Broadcast messages,
the entry and display of phone book entries text field and SIM Application Toolkit alpha strings.
1.6 Flow control
Flow control is very important for correct communication between the GSM engine and DTE.
For in the case such as a data or fax call, the sending device is transferring data faster than the
receiving side is ready to accept. When the receiving buffer reaches its capacity, the receiving
device should be capable to cause the sending device to pause until it catches up.
There are basically two approaches to achieve data flow control: software flow control and
hardware flow control. SIM800 Series support both two kinds of flow control.
In Multiplex mode, it is recommended to use the hardware flow control.
1.6.1 Software flow control (XON/XOFF flow control)
Software flow control sends different characters to stop (XOFF, decimal 19) and resume (XON,
decimal 17) data flow. It is quite useful in some applications that only use three wires on the 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 25 2015-08-03
serial interface.
The default flow control approach of SIM800 Series is hardware flow control (RTS/CTS flow
control), to enable software flow control in the DTE interface and within GSM engine, type the
following AT Command:
AT+IFC=1, 1
This setting is stored volatile, for use after restart, AT+IFC=1, 1 should be stored to the user
profile with AT&W.
NOTE:
The AT commands listed in the table of AT&W chapter should be stored to user profile with
AT&W for use after restart. Most other AT commands in V.25, 3GPP TS 27.005, 3GPP TS
27.007,GPRS will store parameters automatically and can be used after module restart.
Ensure that any communications software package (e.g. Hyper terminal) uses software flow
control.
NOTE:
Software Flow control should not be used for data calls where binary data will be transmitted or
received (e.g. TCP/IP) as the DTE interface may interpret binary data as flow control characters.
1.6.2 Hardware flow control (RTS/CTS flow control)
Hardware flow control achieves the data flow control by controlling the RTS/CTS line. When the
data transfer should be suspended, the CTS line is set inactive until the transfer from the
receiving buffer has completed. When the receiving buffer is ok to receive more data, CTS goes
active once again.
To achieve hardware flow control, ensure that the RTS/CTS lines are present on your application
platform.
1.7 Definitions
1.7.1 Parameter Saving Mode
For the purposes of the present document, the following syntactical definitions apply:
 NO_SAVE: The parameter of the current AT command will be lost if module is rebooted or
current AT command doesn't have parameter.
 AUTO_SAVE: The parameter of the current AT command will be kept in NVRAM
automatically, and it won't be lost if module is rebooted.
 AT&W_SAVE: The parameter of the current AT command will be kept in NVRAM by
sending the command of “AT&W.”
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 26 2015-08-03
1.7.2 Max Response Time
Max response time is estimated maximum time to get response, the unit is seconds.
"-" means this AT command doesn’t care the response time. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 27 2015-08-03
2 AT Commands According to V.25TER
These AT Commands are designed according to the ITU-T (International Telecommunication
Union, Telecommunication sector) V.25ter document.
2.1 Overview of AT Commands According to V.25TER
Command Description
A/ Re-issues the last command given
ATA Answer an incoming call
ATD Mobile originated call to dial a number
ATD><N> Originate call to phone number in current memory
ATD><STR> Originate call to phone number in memory which corresponds to field
<str>
ATDL Redial last telephone number used
ATE Set command echo mode
ATH Disconnect existing connection
ATI Display product identification information
ATL Set monitor speaker loudness
ATM Set monitor speaker mode
+++ Switch from data mode or ppp online mode to command mode
ATO Switch from command mode to data mode
ATP Select pulse dialling
ATQ Set result code presentation mode
ATS0 Set number of rings before automatically answering the call
ATS3 Set command line termination character
ATS4 Set response formatting character
ATS5 Set command line editing character
ATS6 Pause before blind dialling
ATS7 Set number of seconds to wait for connection completion
ATS8 Set number of seconds to wait for comma dial modifier encountered in
dial string of D command
ATS10 Set disconnect delay after indicating the absence of data carrier
ATT Select tone dialing
ATV TA response format
ATX Set connect result code format and monitor call progress
ATZ Reset default configuration
AT&C Set DCD function mode
AT&D Set DTR function mode 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 28 2015-08-03
AT&F Factory defined configuration
AT&V Display current configuration
AT&W Store active profile
AT+GCAP Request complete TA capabilities list
AT+GMI Request manufacturer identification
AT+GMM Request TA model identification
AT+GMR Request TA revision identification of software release
AT+GOI Request global object identification
AT+GSN Request TA serial number identification (IMEI)
AT+ICF Set TE-TA control character framing
AT+IFC Set TE-TA local data flow control
AT+IPR Set TE-TA fixed local rate
AT+HVOIC Disconnect voice call only
2.2 Detailed Description of AT Commands According to V.25TER
2.2.1 A/ Re-issues the Last Command Given
A/ Re-issues the Last Command Given
Execution
Command
A/
Response
Re-issues the previous Command
Reference
V.25ter
Note
2.2.2 ATA Answer an Incoming Call
ATA Answer an Incoming Call
Execution
Command
ATA
Response
TA sends off-hook to the remote station.
Note1: Any additional commands on the same Command line are ignored.
Note2: This Command may be aborted generally by receiving a character
during execution. The aborting is not possible during some states of
connection establishment such as handshaking.
Response in case of data call, if successfully connected
CONNECT<text> TA switches to data mode.
Note: <text> output only if ATX<value> parameter setting with the
<value>>0
When TA returns to Command mode after call release
OK
Response in case of voice call, if successfully connected 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 29 2015-08-03
OK
Response if no connection
NO CARRIER
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s(voice call)
Timeout set with ATS7 (data call)
Reference
V.25ter
Note
See also ATX
2.2.3 ATD Mobile Originated Call to Dial A Number
ATD Mobile Originated Call to Dial A Number
Execution
Command
ATD<n>[<mgsm
][;]
Response
This Command can be used to set up outgoing voice, data or fax calls. It
also serves to control supplementary services.
Note: This Command may be aborted generally by receiving an ATH
Command or a character during execution. The aborting is not possible
during some states of connection establishment such as handshaking.
If error is related to ME functionality
+CME ERROR: <err>
If no dial tone and (parameter setting ATX2 or ATX4)
NO DIALTONE
If busy and (parameter setting ATX3 or ATX4)
BUSY
If a connection cannot be established
NO CARRIER
If the remote station does not answer
NO ANSWER
If connection successful and non-voice call.
CONNECT<text> TA switches to data mode.
Note: <text> output only if ATX<value> parameter setting with the
<value> >0
When TA returns to Command mode after call release
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 30 2015-08-03
If connection successful and voice call
OK
Parameters
<n> String of dialing digits and optionally V.25ter modifiers dialing
digits: 0-9, * , #, +, A, B, C
 Following V.25ter modifiers are ignored:
,(comma), T, P, !, W, @
Emergency call:
<n> Standardized emergency number 112 (no SIM needed)
<mgsm> String of GSM modifiers:
I Actives CLIR (Disables presentation of own number to
called party)
 i Deactivates CLIR (Enable presentation of own number
to called party)
G Activates Closed User Group invocation for this call
only
 g Deactivates Closed User Group invocation for this call
only
<;> Only required to set up voice call , return to Command state
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s(voice call)
Timeout set with ATS7 (data call)
Reference
V.25ter
Note
Parameter "I" and "i" only if no *# code is within the dial string
<n> is default for last number that can be dialed by ATDL
*# codes sent with ATD are treated as voice calls. Therefore, the Command
must be terminated with a semicolon ";"
See ATX Command for setting result code and call monitoring parameters.
Responses returned after dialing with ATD
For voice call two different responses mode can be determined. TA returns
"OK" immediately either after dialing was completed or after the call is
established. The setting is controlled by AT+COLP. Factory default is
AT+COLP=0, this cause the TA returns "OK" immediately after dialing
was completed, otherwise TA will returns "OK", "BUSY", "NO DIAL
TONE", "NO CARRIER".
Using ATD during an active voice call:
When a user originates a second voice call while there is already an active
voice call, the first call will be automatically put on hold. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 31 2015-08-03
The current states of all calls can be easily checked at any time by using the
AT+CLCC Command.
2.2.4 ATD><n> Originate Call to Phone Number in Current Memory
ATD><n> Originate Call to Phone Number in Current Memory
Response
This Command can be used to dial a phone number from current phonebook
memory.
Note: This Command may be aborted generally by receiving an ATH
Command or a character during execution. The aborting is not possible
during some states of connection establishment such as handshaking.
If error is related to ME functionality
+CME ERROR: <err>
If no dial tone and (parameter setting ATX2 or ATX4)
NO DIALTONE
If busy and (parameter setting ATX3 or ATX4)
BUSY
If a connection cannot be established
NO CARRIER
If the remote station does not answer
NO ANSWER
If connection successful and non-voice call.
CONNECT<text> TA switches to data mode.
Note: <text> output only if ATX<value> parameter setting with the
<value> >0
When TA returns to Command mode after call release
OK
If successfully connected and voice call
OK
Execution
Command
ATD><n>[<clir>
][<cug>][;]
Parameters
<n> Integer type memory location should be in the range of locations
available in the memory used
<mgsm> String of GSM modifiers:
<clir>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 32 2015-08-03
I Override the CLIR supplementary service subscription
default value for this call
Invocation (restrict CLI presentation)
 i Override the CLIR supplementary service subscription
default value for this call
Suppression (allow CLI presentation)
<cug>
G Control the CUG supplementary service information
for this call
CUG Not supported
g Control the CUG supplementary service information
for this call
CUG Not supported
<;> Only required to set up voice call , return to
Command state
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
Parameter "I" and "i" only if no *# code is within the dial string
*# codes sent with ATD are treated as voice calls. Therefore, the Command
must be terminated with a semicolon ";"
See ATX Command for setting result code and call monitoring parameters.
2.2.5 ATD><str> Originate Call to Phone Number in Memory Which Corresponds to
Field <str>
ATD><str> Originate Call to Phone Number in Memory Which Corresponds to Field
<str>
Execution
Command
ATD><str>[<clir
>][<cug>][;]
Response
This Command make the TA attempts to set up an outgoing call to stored
number.
All available memories are searched for the entry <str>.
Note: This Command may be aborted generally by receiving an ATH
Command or a character during execution. The aborting is not possible
during some states of connection establishment such as handshaking.
If error is related to ME functionality
+CME ERROR: <err>
If no dial tone and (parameter setting ATX2 or ATX4)
NO DIALTONE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 33 2015-08-03
If busy and (parameter setting ATX3 or ATX4)
BUSY
If a connection cannot be established
NO CARRIER
If the remote station does not answer
NO ANSWER
If connection successful and non-voice call.
CONNECT<text> TA switches to data mode.
Note: <text> output only if ATX<value> parameter setting with the
<value> >0
When TA returns to Command mode after call release
OK
If successfully connected and voice call
OK
Parameters
<str> String type (string should be included in quotation marks) value
("x"), which should equal to an alphanumeric field in at least one phone
book entry in the searched memories. <str> formatted as current TE
character set specified by +CSCS.
<mgsm> String of GSM modifiers:
I Actives CLIR (Disables presentation of own number to
called party)
 i Deactivates CLIR (Enable presentation of own number to
called party)
G Activates Closed User Group invocation for this call only
 g Deactivates Closed User Group invocation for this call only
<;> Only required to set up voice call, return to Command state
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
Parameter "I" and "i" only if no "*#" code is within the dial string
*# codes sent with ATD are treated as voice calls. Therefore, the Command
must be terminated with a semicolon ";"
See ATX Command for setting result code and call monitoring parameters.
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 34 2015-08-03
2.2.6 ATDL Redial Last Telephone Number Used
ATDL Redial Last Telephone Number Used
Execution
Command
ATDL
Response
This Command redials the last voice and data call number used.
Note: This Command may be aborted generally by receiving an ATH
Command or a character during execution. The aborting is not possible
during some states of connection establishment such as handshaking.
If error is related to ME functionality
+CME ERROR: <err>
If no dial tone and (parameter setting ATX2 or ATX4)
NO DIALTONE
If busy and (parameter setting ATX3 or ATX4)
BUSY
If a connection cannot be established
NO CARRIER
If the remote station does not answer
NO ANSWER
If connection successful and non-voice call.
CONNECT<text> TA switches to data mode.
Note: <text> output only if ATX<value> parameter setting with the
<value> >0
When TA returns to Command mode after call release
OK
If successfully connected and voice call
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
See ATX Command for setting result code and call monitoring parameters.
Return the numbers and symbols which ATD supports if there is no last
dialing context. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 35 2015-08-03
2.2.7 ATE Set Command Echo Mode
ATE Set Command Echo Mode
Response
This setting determines whether or not the TA echoes characters received
from TE during Command state.
OK
Execution
Command
ATE<value>
Parameters
<value> 0 Echo mode off
 1 Echo mode on
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.8 ATH Disconnect Existing Connection
ATH Disconnect Existing Connection
Execution
Command
ATH
Response
Disconnect existing call by local TE from Command line and terminate call
OK
Note: OK is issued after circuit 109(DCD) is turned off, if it was previously
on.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s
Reference
V.25ter
Note
2.2.9 ATI Display Product Identification Information
ATI Display Product Identification Information
Execution
Command
ATI
Response
TA issues product information text
Example:
SIM800 R11.08
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 36 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.10 ATL Set Monitor speaker loudness
ATL Set Monitor speaker loudness
Response
OK
Execution
Command
ATL<value> Parameters
<value> 0..9 Volume
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
No effect in GSM
2.2.11 ATM Set Monitor Speaker Mode
ATM Set Monitor Speaker Mode
Response
OK
Execution
Command
ATM<value> Parameters
<value> 0..9 Mode
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
No effect in GSM
2.2.12 +++ Switch from Data Mode or PPP Online Mode to Command Mode
+++ Switch from Data Mode or PPP Online Mode to Command Mode
Execution
Command
+++
Response
The +++ character sequence causes the TA to cancel the data flow over the
AT interface and switch to Command mode. This allows you to enter AT
Command while maintaining the data connection to the remote server.
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 37 2015-08-03
To prevent the +++ escape sequence from being misinterpreted as data, it
should comply to following sequence:
No characters entered for T1 time (1 second)
"+++" characters entered with no characters in between (1 second)
No characters entered for T1 timer (1 second)
Switch to Command mode, otherwise go to step 1.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
To return from Command mode back to data mode: Enter ATO.
2.2.13 ATO Switch from Command Mode to Data Mode
ATO Switch from Command Mode to Data Mode
Response
TA resumes the connection and switches back from Command mode to data
mode.
CONNECT
If connection is not successfully resumed
ERROR
else
TA returns to data mode from command mode CONNECT <text>
Note: <text> only if parameter setting ATX>0
Execution
Command
ATO[n]
Parameter
<n> 0 Switch from command mode to data mode.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.14 ATP Select Pulse Dialling
ATP Select Pulse Dialling
Execution
Command
ATP
Response
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 38 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
No effect in GSM
2.2.15 ATQ Set Result Code Presentation Mode
ATQ Set Result Code Presentation Mode
Response
This parameter setting determines whether or not the TA transmits any result
code to the TE. Information text transmitted in response is not affected by
this setting.
 If <n>=0:
OK
 If <n>=1:
(none)
Execution
Command
ATQ<n>
Parameters
<n> 0 TA transmits result code
1 Result codes are suppressed and not transmitted
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.16 ATS0 Set Number of Rings before Automatically Answering the Call
ATS0 Set Number of Rings before Automatically Answering the Call
Response
<n>
OK
Read Command
ATS0?
Parameters
See Write Command
Response
This parameter setting determines the number of rings before auto-answer.
OK
ERROR
Write Command
ATS0=<n>
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 39 2015-08-03
<n> 0 Automatic answering is disable.
1-255 Number of rings the modem will wait for before answering
the phone if a ring is detected.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
If <n> is set too high, the calling party may hang up before the call can be
answered automatically.
If using cmux port, ATH and AT+CHUP can hang up the call (automatically
answering) only in the CMUX channel 0.
If using dual-physical serial port, ATH and AT+CHUP can hang up the call
(automatically answering) only in UART1.
2.2.17 ATS3 Set Command Line Termination Character
ATS3 Set Command Line Termination Character
Response
<n>
OK
Read Command
ATS3?
Parameters
See Write Command
Response
This parameter setting determines the character recognized by TA to
terminate an incoming Command line. The TA also returns this character in
output.
OK
ERROR
Write Command
ATS3=<n>
Parameters
<n> 13 Command line termination character
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
Default 13 = CR. It only supports default value.
2.2.18 ATS4 Set Response Formatting Character
ATS4 Set Response Formatting Character
Read Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 40 2015-08-03
<n>
OK
ATS4?
Parameters
See Write Command
Response
This parameter setting determines the character generated by the TA for
result code and information text.
OK
ERROR
Write Command
ATS4=<n>
Parameters
<n> 10 Response formatting character
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
Default 10 = LF. It only supports default value.
2.2.19 ATS5 Set Command Line Editing Character
ATS5 Set Command Line Editing Character
Response
<n>
OK
Read Command
ATS5?
Parameters
See Write Command
Response
This parameter setting determines the character recognized by TA as a
request to delete from the Command line the immediately preceding
character.
OK
ERROR
Write Command
ATS5=<n>
Parameters
<n> 0-8-127 Response formatting character
Parameter Saving
Mode
AT&W_SAVE
Max Response - 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 41 2015-08-03
Time
Reference
V.25ter
Note
Default 8 = Backspace.
2.2.20 ATS6 Pause Before Blind Dialling
ATS6 Pause Before Blind Dialling
Read Command
ATS6?
Response
<n>
OK
Response
OK
ERROR
Write Command
ATS6=<n>
Parameters
<n> 0..999 Time
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
No effect in GSM
2.2.21 ATS7 Set Number of Seconds to Wait for Connection Completion
ATS7 Set Number of Seconds to Wait for Connection Completion
Response
<n>
OK
Read Command
ATS7?
Parameters
See Write Command
Response
This parameter setting determines the amount of time to wait for the
connection completion in case of answering or originating a call.
OK
ERROR
Write Command
ATS7=<n>
Parameters
<n> 1-60-255 Number of seconds to wait for connection completion
Parameter Saving
Mode
AT&W_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 42 2015-08-03
Max Response
Time
-
Reference
V.25ter
Note
If called party has specified a high value for ATS0=<n>, call setup may fail.
The correlation between ATS7 and ATS0 is important
Example: Call may fail if ATS7=30 and ATS0=20.
ATS7 is only applicable to data call.
2.2.22 ATS8 Set Number of Seconds to Wait for Comma Dial Modifier Encountered in
Dial String of D Command
ATS8 Set Number of Seconds to Wait for Comma Dial Modifier Encountered in Dial
String of D Command
Response
<n>
OK
Read Command
ATS8?
Parameters
See Write Command
Response
OK
ERROR
Write Command
ATS8=<n>
Parameters
<n> 0-255 The value of this register determines how long the modem
should pause when it sees a comma in the dialing string.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
No effect in GSM
2.2.23 ATS10 Set Disconnect Delay after Indicating the Absence of Data Carrier
ATS10 Set Disconnect Delay after Indicating the Absence of Data Carrier
Response
<n>
OK
Read Command
ATS10?
Parameters
See Write Command
Write Command
ATS10=<n>
Response
This parameter setting determines the amount of time that the TA will 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 43 2015-08-03
remain connected in absence of data carrier. If the data carrier is once more
detected before disconnecting, the TA remains connected.
OK
ERROR
Parameters
<n> 1-15-254 Number of tenths seconds of delay
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.24 ATT Select Tone Dialing
ATT Select Tone Dialing
Execution
Command
ATT
Response
OK
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.25 ATV TA Response Format
ATV TA Response Format
Response
This parameter setting determines the contents of the header and trailer
transmitted with result codes and information responses.
 When <value>=0
0
 When <value>=1
OK
Execution
Command
ATV<value>
Parameters
<value> 0 Information response: <text><CR><LF>
 Short result code format: <numeric code><CR>
1 Information response: <CR><LF><text><CR><LF>
Long result code format: <CR><LF><verbose code>
<CR><LF> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 44 2015-08-03
The result codes, their numeric equivalents and brief descriptions of the use
of each are listed in the following table.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
ATV1 ATV0 Description
OK 0 Acknowledges execution of a Command
CONNECT 1 A connection has been established; the DCE is moving from
Command state to online data state
RING 2 The DCE has detected an incoming call signal from
network
NO CARRIER 3 The connection has been terminated or the attempt to
establish a connection failed
ERROR 4 Command not recognized, Command line maximum length
exceeded, parameter value invalid, or other problem with
processing the Command line
NO DIALTONE 6 No dial tone detected
BUSY 7 Engaged (busy) signal detected
NO ANSWER 8 "@" (Wait for Quiet Answer) dial modifier was used, but
remote ringing followed by five seconds of silence was not
detected before expiration of the connection timer (S7)
PROCEEDING 9 An AT command is being processed
CONNECT
<text>
Manufacturerspecific
Same as CONNECT, but includes manufacturer-specific
text that may specify DTE speed, line speed, error control,
data compression, or other status
2.2.26 ATX Set CONNECT Result Code Format and Monitor Call Progress
ATX Set CONNECT Result Code Format and Monitor Call Progress
Response
This parameter setting determines whether or not the TA detected the
presence of dial tone and busy signal and whether or not TA transmits
particular result codes.
OK
ERROR
Execution
Command
ATX<value>
Parameters
<value> 0 CONNECT result code only returned, dial tone and busy 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 45 2015-08-03
detection are both disabled.
1 CONNECT<text> result code only returned, dial tone and
busy detection are both disabled.
2 CONNECT<text> result code returned, dial tone
detection is enabled, busy detection is disabled.
3 CONNECT<text> result code returned, dial tone
detection is disabled, busy detection is enabled.
4 CONNECT<text> result code returned, dial tone and
busy detection are both enabled.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.27 ATZ Reset Default Configuration
ATZ Reset Default Configuration
Response
TA sets all current parameters to the user defined profile.
OK
ERROR
Execution
Command
ATZ[<value>]
Parameters
<value> 0 Restore profile 0
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
Parameter impacted by Z command: refer to AT&W
NOTE:
Parameters related to uart operation, like csclk, ipr, icf, ifc and cmnrp, will not be reset to
default configuration.
2.2.28 AT&C Set DCD Function Mode
AT&C Set DCD Function Mode
Execution
Command
AT&C<value>
Response
This parameter determines how the state of circuit 109 (DCD) relates to the
detection of received line signal from the distant end. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 46 2015-08-03
OK
ERROR
Parameters
<value> 0 DCD line is always ON
1 DCD line is ON only in the presence of data carrier
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.29 AT&D Set DTR Function Mode
AT&D Set DTR Function Mode
Response
This parameter determines how the TA responds when circuit 108/2 (DTR)
is changed from the ON to the OFF condition during data mode.
OK
ERROR
Execution
Command
AT&D[<value>]
Parameters
<value> 0 TA ignores status on DTR.
1 ON->OFF on DTR: Change to Command mode with
remaining the connected call.
2 ON->OFF on DTR: Disconnect call, change to Command
mode. During state DTR = OFF is auto-answer off.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.30 AT&F Factory Defined Configuration
AT&F Factory Defined Configuration
Response
TA sets all current parameters to the manufacturer defined profile.
OK
Execution
Command
AT&F[<value>]
Parameters
<value> 0 Set all TA parameters to manufacturer defaults. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 47 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
Parameter impacted by &F command: refer to AT&W
NOTE:
Parameters related to uart operation, like csclk, ipr, icf, ifc and cmnrp, will not be reset to
default configuration.
2.2.31 AT&V Display Current Configuration
AT&V Display Current Configuration
Response
TA returns the current parameter setting.
<current configurations text>
OK
ERROR
Execution
Command
AT&V[<n>]
Parameters
<n> 0 Responses in numeric format
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.32 AT&W Store Active Profile
AT&W Store Active Profile
Response
TA stores the current parameter setting in the user defined profile.
OK
ERROR
Execution
Command
AT&W[<n>]
Parameters
<n> 0 Store the current configuration in profile 0
Parameter Saving
Mode
NO_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 48 2015-08-03
Reference
V.25ter
Note
The user defined profile is stored in non volatile memory.
Parameter stored by &W
Command Parameter name Displayedby &V
ATS0 <num> Y
ATS3 <char> Y
ATS4 <char> Y
ATS5 <char> Y
ATS6 <short> Y
ATS7 <time> Y
ATS8 <time> Y
ATS10 <time> Y
AT+CBST <speed>,<name>,<ce> Y
AT+CRLP <iws>,<mws>,<T1>,<N2> Y
ATV <format> Y
ATE <echo> Y
ATQ <result> Y
ATX <result> Y
AT&C <behavior> Y
AT&D <behavior> Y
AT+CLTS <timestamp> Y
AT+CREG <n> Y
AT+CGREG <n> Y
AT+CMEE <n> Y
AT+CSCLK <n> Y
AT+CIURC <mode> Y
AT+CFGRI <mode> Y
AT+CMTE <mode> Y
AT+CANT <mode>,<UrcEnable>,<timer> Y
AT+STKPCIS <switch> Y
AT+CMGF <mode> Y
AT+CNMI <mode>,<mt>,<bm>,<ds>,<bfr> Y
AT+CSCS <chest> Y
AT+VTD <n> Y
AT+CALS <n> Y
AT+CHF <ind> Y
AT+CAAS <mode> Y
AT+CBUZZERRING <mode> Y 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 49 2015-08-03
AT+DDET <n> Y
AT+MORING <mode> Y
AT+SVR <voice_rate_coding> Y
AT+CCPD <mode> Y
AT+CSGS <mode> Y
AT+CNETLIGHT <mode> Y
AT+SLEDS <mode>,<timer_on>,<timer_off> Y
AT+CSDT <mode> Y
AT+CSMINS <n> Y
AT+EXUNSOL <exunsol> Y
AT+IPR <n> Y
AT+IFC <TA_by_TE>, <TE_by_TA> Y
AT+ICF <format>,<parity> Y
AT+SD2PCM <mode> Y
AT+CMNRP <mode> Y
AT+ECHARGE <n> Y
AT+SIMTIMER <time> Y
AT+CSNS <mode> Y
AT+FSHEX <n> Y
2.2.33 AT+GCAP Request Complete TA Capabilities List
AT+GCAP Request Complete TA Capabilities List
Response
TA reports a list of additional capabilities.
+GCAP: list of supported <name>s
OK
Execution
Command
AT+GCAP
Parameters
<name> +CGSM GSM function is supported
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note

2.2.34 AT+GMI Request Manufacturer Identification
AT+GMI Request Manufacturer Identification
Test Command
AT+GMI=?
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 50 2015-08-03
Parameters
Execution
Command
AT+GMI
TA reports one or more lines of information text which permit the user to
identify the manufacturer.
SIMCOM_Ltd
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.35 AT+GMM Request TA Model Identification
AT+GMM Request TA Model Identification
Test Command
AT+GMM=?
Response
OK
TA reports one or more lines of information text which permit the user to
identify the specific model of device.
<model>
OK
Execution
Command
AT+GMM
Parameters
<model> Product model identification text
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.36 AT+GMR Request TA Revision Identification of Software Release
AT+GMR Request TA Revision Identification of Software Release
Test Command
AT+GMR=?
Response
OK
Execution
Command
TA reports one or more lines of information text which permit the user to
identify the revision of software release. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 51 2015-08-03
Revision: <revision>
OK
AT+GMR
Parameters
<revision> Revision of software release
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.37 AT+GOI Request Global Object Identification
AT+GOI Request Global Object Identification
Test Command
AT+GOI=?
Response
OK
Response
TA reports one or more lines of information text which permit the user to
identify the device, based on the ISO system for registering unique object
identifiers.
<Object Id>
OK
Execution
Command
AT+GOI
Parameters
<Object Id> Identifier of device type
see X.208, 209 for the format of <Object Id>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.38 AT+GSN Request TA Serial Number Identification (IMEI)
AT+GSN Request TA Serial Number Identification(IMEI)
Test Command
AT+GSN=?
Response
OK
Execution
Command
Response
TA reports the IMEI (international mobile equipment identifier) number in 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 52 2015-08-03
information text which permit the user to identify the individual ME device.
<sn>
OK
AT+GSN
Parameters
<sn> IMEI of the telephone(International Mobile station Equipment
Identity)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
The serial number (IMEI) is varied by individual ME device.
2.2.39 AT+ICF Set TE-TA Control Character Framing
AT+ICF Set TE-TA Control Character Framing
Response
+ICF: (list of supported <format>s),(list of supported <parity>s)
OK
Test Command
AT+ICF=?
Parameters
See Write Command
Response
+ICF: <format>,<parity>
OK
Read Command
AT+ICF?
Parameters
See Write Command
Response
This parameter setting determines the serial interface character framing
format and parity received by TA from TE.
OK
Write Command
AT+ICF=<forma
t>[,<parity>]
Parameters
<format> 1 8 data 0 parity 2 stop
 2 8 data 1 parity 1 stop
 3 8 data 0 parity 1 stop
 4 7 data 0 parity 2 stop
 5 7 data 1 parity 1 stop
 6 7 data 0 parity 1 stop
<parity> 0 odd
 1 even 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 53 2015-08-03
 3 space (0)
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
The Command is applied for Command state;
In <format> parameter, "0 parity" means no parity;
The <parity> field is ignored if the <format> field specifies no parity and
string "+ICF: <format>,255" will be response to AT+ICF? Command.
2.2.40 AT+IFC Set TE-TA Local Data Flow Control
AT+IFC Set TE-TA Local Data Flow Control
Response
+IFC: (list of supported <dce_by_dte>s),(list of supported
<dte_by_dce>s)
OK
Test Command
AT+IFC=?
Parameters
See Write Command
Response
+IFC: <dce_by_dte>,<dte_by_dce>
OK
Read Command
AT+IFC?
Parameters
See Write Command
Response
This parameter setting determines the data flow control on the serial
interface for data mode.
OK
Write Command
AT+IFC=<dce_b
y_dte>[,<dte_by
_dce>]
Parameters
<dce_by_dte> Specifies the method will be used by TE at receive of
data from TA
 0 No flow control
 1 Software flow control
2 Hardware flow control
<dte_by_dce> Specifies the method will be used by TA at receive of data
from TE
 0 No flow control
 1 Software flow control
 2 Hardware flow control 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 54 2015-08-03
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
V.25ter
Note
2.2.41 AT+IPR Set TE-TA Fixed Local Rate
AT+IPR Set TE-TA Fixed Local Rate
Response
+IPR: (list of supported auto detectable <rate>s),(list of supported
fixed-only <rate>s)
OK
Test Command
AT+IPR=?
Parameters
See Write Command
Response
+IPR: <rate>
OK
Read Command
AT+IPR?
Parameters
See Write Command
Response
This parameter setting determines the data rate of the TA on the serial
interface. The rate of Command takes effect following the issuance of any
result code associated with the current Command line.
OK
Write Command
AT+IPR=<rate>
Parameters
<rate> Baud rate per second
0 (Auto-bauding)
 1200
 2400
 4800
 9600
 19200
 38400
 57600
 115200
 230400
 460800
Parameter Saving
Mode
AT&W_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 55 2015-08-03
Max Response
Time
-
Reference
V.25ter
Note
Factory setting is AT+IPR=0（auto-bauding）.
2.2.41.1 Auto-bauding
Synchronization between DTE and DCE ensure that DTE and DCE are correctly synchronized and
the baud rate used by the DTE is detected by the DCE (= ME).To allow the baud rate to be
synchronized, simply issue an "AT" string. This is necessary when you start up the module while
auto-bauding is enabled. It is recommended to wait 3 to 5 seconds before sending the first AT
character. Otherwise undefined characters might be returned.
If you want to use auto-bauding and auto-answer at the same time, you can easily enable the
DTE-DCE synchronization, when you activate auto-bauding first and then configure the
auto-answer mode.
Restrictions on auto-bauding operation
The serial interface has to be operated at 8 data bits, no parity and 1 stop bit (factory setting).
Only the strings "AT" or "at" can be detected when auto-bauding is enabled.
AT+IPR=0 setting to auto-bauding will take effect after module resets.
Unsolicited Result Codes that may be issued before the ME detects the new baud rate (by
receiving the first AT Command string) will be sent at the previously detected baud rate.The
Unsolicited Result Codes "RDY" and so on are not indicated when you start up the ME while
auto-bauding is enabled.
It is not recommended to switch to auto-bauding from a baud rate that cannot be detected by the
auto-bauding mechanism (e.g. 300 baud). Responses to +IPR=0 and any commands on the same
line might be corrupted.
Auto-bauding and baud rate after restart
The most recently detected baud rate can not be stored when module is powered down.
2.2.42 AT+HVOIC Disconnect Voice Call Only
AT+HVOIC Disconnect Voice Call Only
Execution
Command
AT+HVOIC
Response
Disconnect existing voice call by local TE from Command line and
terminate call with existing PPP or CSD connection on.
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 56 2015-08-03
Reference
V.25ter
Note
3 AT Commands According to 3GPP TS 27.007
3.1 Overview of AT Command According to 3GPP TS 27.007
Command Description
AT+CACM Accumulated call meter(ACM) reset or query
AT+CAMM Accumulated call meter maximum(ACM max) set or query
AT+CAOC Advice of charge
AT+CBST Select bearer service type
AT+CCFC Call forwarding number and conditions control
AT+CCWA Call waiting control
AT+CEER Extended error report
AT+CGMI Request manufacturer identification
AT+CGMM Request model identification
AT+CGMR Request TA revision identification of software release
AT+CGSN Request product serial number identification (identical with +GSN)
AT+CSCS Select TE character set
AT+CSTA Select type of address
AT+CHLD Call hold and multiparty
AT+CIMI Request international mobile subscriber identity
AT+CLCC List current calls of ME
AT+CLCK Facility lock
AT+CLIP Calling line identification presentation
AT+CLIR Calling line identification restriction
AT+CMEE Report mobile equipment error
AT+COLP Connected line identification presentation
AT+COPS Operator selection
AT+CPAS Phone activity status
AT+CPBF Find phonebook entries
AT+CPBR Read current phonebook entries
AT+CPBS Select phonebook memory storage
AT+CPBW Write phonebook entry
AT+CPIN Enter PIN
AT+CPWD Change password
AT+CR Service reporting control
AT+CRC Set cellular result codes for incoming call indication 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 57 2015-08-03
AT+CREG Network registration
AT+CRLP Select radio link protocol parameters
AT+CRSM Restricted SIM access
AT+CSQ Signal quality report
AT+VTD Tone duration
AT+VTS DTMF and tone generation
AT+CMUX Multiplexer control
AT+CNUM Subscriber number
AT+CPOL Preferred operator list
AT+COPN Read operator names
AT+CFUN Set phone functionality
AT+CCLK Clock
AT+CSIM Generic SIM access
AT+CALM Alert sound mode
AT+CALS Alert sound select
AT+CRSL Ringer sound level
AT+CLVL Loud speaker volume level
AT+CMUT Mute control
AT+CPUC Price per unit and currency table
AT+CCWE Call meter maximum event
AT+CBC Battery charge
AT+CUSD Unstructured supplementary service data
AT+CSSN Supplementary services notification
3.2 Detailed Descriptions of AT Command According to 3GPP TS 27.007
3.2.1 AT+CACM Accumulated Call Meter (ACM) Reset or Query
AT+CACM Accumulated Call Meter(ACM) Reset or Query
Test Command
AT+CACM=?
Response
OK
Response
TA returns the current value of ACM.
+CACM: <acm>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CACM?
Parameters
<acm> String type (string should be included in quotation marks); 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 58 2015-08-03
three bytes of the current ACM value in hexa-decimal format (e.g.
"00001E" indicates decimal value 30)
000000 – FFFFFF
Response
TA resets the Advice of Charge related accumulated call meter (ACM)
value in SIM file EF (ACM). ACM contains the total number of home
units for both the current and preceding calls.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CACM=<pa
sswd>
Parameters
<passwd> String type (string should be included in quotation marks):
SIM PIN2
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.2 AT+CAMM Accumulated Call Meter Maximum (ACM max) Set or Query
AT+CAMM Accumulated Call Meter Maximum(ACM max) Set or Query
Test Command
AT+CAMM=?
Response
OK
Response
TA returns the current value of ACM max.
+CAMM: <acmmax>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CAMM?
Parameters
See Write Command
Write Command
AT+CAMM=<ac
mmax>[,<passwd
>]
Response
TA sets the Advice of Charge related accumulated call meter maximum
value in SIM file EF (ACM max). ACM max contains the maximum
number of home units allowed to be consumed by the subscriber.
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 59 2015-08-03
Parameters
<acmmax> String type (string should be included in quotation
marks); three bytes of the max. ACM value in hex-decimal format (e.g.
"00001E" indicates decimal value 30)
 000000 disable ACMmax feature
 000001-FFFFFF
<passwd> String type (string should be included in quotation marks)
 SIM PIN2
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.3 AT+CAOC Advice of Charge
AT+CAOC Advice of Charge
Response
+CAOC: (list of supported <mode>s)

OK
Test Command
AT+CAOC=?
Parameters
See Write Command
Response
+CAOC: <mode>
OK
Read Command
AT+CAOC?
Parameters
See Write Command
Write Command
AT+CAOC=<mo
de>
Response
TA sets the Advice of Charge supplementary service function mode.
If <mode>=0, TA returns the current call meter value
+CAOC: <ccm>
OK
If <mode>=1, TA deactivates the unsolicited reporting of CCM value
OK
If <mode>=2, TA activates the unsolicited reporting of CCM value
OK
ERROR
If error is related to ME functionality: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 60 2015-08-03
+CME ERROR: <err>
Parameters
<mode> 0 Query CCM value
 1 Deactivate the unsolicited reporting of CCM value
 2 Activate the unsolicited reporting of CCM value
<ccm> String type (string should be included in quotation marks);
three bytes of the current CCM value in hex-decimal format (e.g.
"00001E" indicates decimal value 30); bytes are similarly coded as
ACMmax value in the SIM 000000-FFFFFF
Execution
Command
AT+CAOC
Response
+CAOC: <ccm>
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.4 AT+CBST Select Bearer Service Type
AT+CBST Select Bearer Service Type
Response
+CBST: (list of supported <speed>s),(list of supported <name>s),(list of
supported <ce>s)
OK
Test Command
AT+CBST=?
Parameters
See Write Command
Response
+CBST: <speed>,<name>,<ce>
OK
Read Command
AT+CBST?
Parameters
See Write Command
Response
TA selects the bearer service <name> with data rate <speed>, and the
connection element <ce> to be used when data calls are originated.
OK
ERROR
Write Command
AT+CBST=<spee
d>[,<name>[,<ce
>]]
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 61 2015-08-03
<speed> 0 Auto-bauding (automatic selection of the speed; this
setting is possible in case of 3.1kHz modern and non-transparent service)
 4 2400 bps (V.22bis)
 5 2400 bps (V.26ter)
 6 4800 bps (V.32)
 7 9600 bps (V.32)
 12 9600 bps (V.34)
 14 14400 bps (V.34)
 68 2400 bps (V.110 or X.31 flag stuffing)
 70 4800 bps (V.110 or X.31 flag stuffing)
 71 9600 bps (V.110 or X.31 flag stuffing)
75 14400 bps (V.110 or X.31 flag stuffing)
<name> 0 Data circuit asynchronous (UDI or 3.1 kHz modem)
4 Data circuit asynchronous (RDI)
<ce> 0 Transparent
1 Non-transparent
2 Both, transparent prefered
3 Both, non-transparent prefered
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[14]
Note
GSM 02.02[1]: lists the allowed combinations of the sub parameters.
3.2.5 AT+CCFC Call Forwarding Number and Conditions Control
AT+CCFC Call Forwarding Number and Conditions Control
Response
+CCFC: (list of supported <reason>s)
OK
Test Command
AT+CCFC=?
Parameters
See Write Command
Write Command
AT+CCFC=<rea
son>,<mode>[,<
number>[,<type
>[,<class>[,<sub
addr>[,<satype>[
,time]]]]]]
Response
TA controls the call forwarding supplementary service. Registration,
erasure, activation, deactivation, and status query are supported.
Only ,<reads> and <mode> should be entered with mode (0-2,4)
If <mode>≠2 and Command successful
OK
If <mode>=2 and Command successful (only in connection with <reason> 0
–3)
For registered call forwarding numbers: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 62 2015-08-03
when <mode>=2 and command successful:
+CCFC:
<status>,<class1>[,<number>,<type>[,<subaddr>,<satype>[,<time>]]]
[<CR><LF>+CCFC:
<status>,<class2>[,<number>,<type>[,<subaddr>,<satype>[,<time>]]][
…]
OK
If no call forwarding numbers are registered (and therefore all classes are
inactive):
+CCFC: <status>, <class>
OK
where <status>=0 and <class>=7
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<reason> 0 Unconditional
1 Mobile busy
2 No reply
3 Not reachable
4 All call forwarding
5 All conditional call forwarding
<mode> 0 Disable
1 Enable
2 Query status
3 Registration
4 Erasure
<number> String type (Phone number of forwarding address in format
specified by <type>)
<type> Type of address
<subaddr> String type (subaddress of format specified by <satype>)
<satype> Type of sub-address in integer
<class> 1 Voice (telephony)
2 Data (refers to all bearer services; with <mode>=2 this
may refer only to some bearer service if TA does not support
values 16, 32, 64 and 128)
4 Fax (facsimile services)
7 All classes
<time> 1..30 When "no reply" is enabled or queried, this gives the time
in seconds to wait before call is forwarded, default value is 20.Supported
only if it is multiples of 5.
<status>
0 Not active 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 63 2015-08-03
1 Active
Parameter Saving
Mode
NO_SAVE
Max Response
Time
15s
Reference
3GPP TS 27.007
Note
3.2.6 AT+CCWA Call Waiting Control
AT+CCWA Call Waiting Control
Response
+CCWA: (list of supported <n>s)
OK
Test Command
AT+CCWA=?
Parameters
See Write Command
Response
+CCWA: <n>
OK
Read Command
AT+CCWA?
Parameters
See Write Command
Response
TA controls the Call Waiting supplementary service. Activation,
deactivation and status query are supported.
If <mode>≠2 and Command successful
OK
If <mode>=2 and Command successful
+CCWA:
<status>,<class1>[<CR><LF>+CCWA:<status>,<class2>[...]]

OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
Note: <status>=0 should be returned only if service is not active for any
<class> i.e. +CCWA: 0, 7 will be returned in this case.
When mode=2, all active call waiting classes will be reported. In this mode
the Command is aborted by pressing any key.
Write Command
AT+CCWA=<n>[,
<mode>[,<class>]]
Parameters
<n> 0 Disable presentation of an unsolicited result code 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 64 2015-08-03
 1 Enable presentation of an unsolicited result code
<mode> When <mode> parameter not given, network is not
interrogated
 0 Disable
 1 Enable
 2 Query status
<class> Is a sum of integers each representing a class of information
 1 Voice (telephony)
 2 Data (refers to all bearer services; with <mode>=2 this
may refer only to some bearer service if TA does not support values 16,
32, 64 and 128
 4 Fax (facsimile services)
 7 Default(1+2+4)
<status> 0 Not active
 1 Active
Unsolicited result code
RING
+CCWA: <number>,<type>,<class>[,<alpha>]
Parameters
<number> String type (string should be included in quotation marks)
phone number of calling address in format specified by <type>
<type> Type of address octet in integer format;
129 Unknown type
161 National number type
145 International number type
177 Network specific number
<alpha> Optional string type (string should be included in quotation
marks) alphanumeric representation of <number> corresponding to the
entry found in phone book.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
15s
Reference
3GPP TS 27.007
Note
3.2.7AT+CEER Extended Error Report
AT+CEER Extended Error Report
Test Command
AT+CEER=?
Response
+CEER: (list of supported <n>s)
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 65 2015-08-03
Parameters
See Write Command
Response
+CEER: <n>
OK
Read Command
AT+CEER?
Parameters
See Write Command
Response
OK
Write Command
AT+CEER=<n>
Parameter
<n> 0 The reason for last call release as text code
1 The reason for last call release as number code
Response
TA returns an extended report of the reason for the last call release.
+CEER: <report>
OK
Parameters
<report> If AT+CEER=0, return <s>
<s> a string that represents the Cause
If AT+CEER=1, return
Cause:<c>
<c> number representing the Cause
Execution
Command
AT+CEER
Parameters
 <c>(number) <s>(string)
0 (No cause)
1 (unassigned (unallocated) number)
3 (no route to destination)
6 (channel unacceptable)
8 (operator determined barring)
16 (normal call clearing)
17 (user busy)
18 (no user responding)
19 (user alerting, no answer)
21 (call rejected)
22 (number changed) 26 (non-selected user clearing)
27 (destination out of order) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 66 2015-08-03
28 (invalid number format (incomplete number))
 29 (facility rejected)
30 (response to STATUS ENQUIRY)
31 (normal, unspecified)
34 (emergency call not possible)
38 (network out of order)
41 (temporary failure)
42 (switching equipment congestion)
43 (access information discarded)
 44 (requested circuit/channel not available)
47 (resource unavailable, unspecified)
49 (quality of service unavailable)
50 (Requested facility not subscribed)
55 (Incoming calls barred within the CUG)
57 (bearer capability not authorized)
58 (bearer capability not presently available)
63 (service or option not available, unspecified)

68 (ACM equal to or greater than ACMmax)
65 (bearer service not implemented)
69 (Requested facility not implemented)
70 (only restricted digital information bearer capability is
available)
79 (service or option not implemented,unspecified)
81 (invalid transaction identifier value)
87 (user not member of CUG)
88 (incompatible destination)
91 (invalid transit network selection)
95 (semantically incorrect message)
96 (invalid mandatory information)
97 (message type non-existent or not implemented)
98 (message type not compatible with protocol state)
99 (information element non-existent or not implemented)
100 (conditional IE error)
101 (message not compatible with protocol state)
102 (recovery on timer expiry) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 67 2015-08-03
111 (protocol error, unspecified)
127 (interworking, unspecified)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.8 AT+CGMI Request Manufacturer Identification
AT+CGMI Request Manufacturer Identification
Test Command
AT+CGMI=?
Response
OK
Response
TA returns manufacturer identification text.
<manufacturer>
OK
Execution
Command
AT+CGMI
Parameters
<manufacturer> The ID of manufacturer
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.9 AT+CGMM Request Model Identification
AT+CGMM Request Model Identification
Test Command
AT+CGMM=?
Response
OK
Response
TA returns product model identification text.
<model>
OK
Execution
Command
AT+CGMM
Parameters
<model> Product model identification text 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 68 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.10 AT+CGMR Request TA Revision Identification of Software Release
AT+CGMR Request TA Revision Identification of Software Release
Test Command
AT+CGMR=?
Response
OK
Response
TA returns product software version identification text.
Revision: <revision>
OK
Execution
Command
AT+CGMR
Parameters
<revision> Product software version identification text
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.11 AT+CGSN Request Product Serial Number Identification (Identical with +GSN)
AT+CGSN Request Product Serial Number Identification (Identical with +GSN)
Test Command
AT+CGSN=?
Response
OK
Response
see +GSN
<sn>
OK
Execution
Command
AT+CGSN
Parameters
<sn> International mobile equipment identity (IMEI)
Parameter Saving
Mode
NO_SAVE
Max Response - 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 69 2015-08-03
Time
Reference
3GPP TS 27.007
[13]
Note
3.2.12 AT+CSCS Select TE Character Set
AT+CSCS Select TE Character Set
Response
+CSCS: (list of supported <chset>s)
OK
Test Command
AT+CSCS=?
Parameters
<chset> "GSM" GSM 7 bit default alphabet (3GPP TS 23.038);
"UCS2" 16-bit universal multiple-octet coded character set
(ISO/IEC10646); UCS2 character strings are converted to
hexadecimal numbers from 0000 to FFFF; e.g.
"004100620063" equals three 16-bit characters with decimal
values 65, 98 and 99
"IRA" International reference alphabet (ITU-T T.50)
 "HEX" Character strings consist only of hexadecimal
bers from 00 to FF;
"PCCP" PC character set Code
"PCDN" PC Danish/Norwegian character set
"8859-1" ISO 8859 Latin 1 character set
Response
+CSCS: <chset>
OK
Read Command
AT+CSCS?
Parameters
See Test Command
Response
Sets which character set <chset> are used by the TE. The TA can then
convert character strings correctly between the TE and ME character sets.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CSCS=<chse
t>
Parameters
See Test Command
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 70 2015-08-03
Reference
3GPP TS 27.007
[13]
Note
3.2.13 AT+CSTA Select Type of Address
AT+CSTA Select Type of Address
Response
+CSTA: (list of supported <type>s)
OK
Test Command
AT+CSTA=?
Parameters
See Write Command
Response
+CSTA: <type>
OK
Read Command
AT+CSTA?
Parameter
<type> Current address type setting.
Response
OK
If <type> is not in the parameter range:
ERROR
Write Command
AT+CSTA=<type
>
Parameters
<type> Type of address octet in integer format;
129 Unknown type
161 National number type
145 International number type
177 Network specific number
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
The ATD Command overrides this setting when a number is dialed.
3.2.14 AT+CHLD Call Hold and Multiparty
AT+CHLD Call Hold and Multiparty
Test Command
AT+CHLD=?
Response
+CHLD: (list of supported <n>s) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 71 2015-08-03
OK
Parameters
See Write Command
Response
TA controls the supplementary services Call Hold, Multiparty and Explicit
Call Transfer. Calls can be put on hold, recovered, released, added to
conversation, and transferred.
Note These supplementary services are only applicable to tele service 11
(Speech: Telephony).
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CHLD=<n>
Parameters
<n> 0 Releases all held calls or sets User Determined User Busy
(UDUB) for a waiting call
1 Releases all active calls (if any exist) and accepts the other
(held or waiting) call.
 1x Releases a specific call x
2 Place all active calls on hold (if any) and accept the other
 (held or waiting) call.
 2x Places all active calls on hold except call X with which
 communication shall be supported.
 3 Adds a held call to the conversation.
 4 Connects the two calls and disconnects the subscriber from
both calls(ECT)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s
Reference Note
3.2.15 AT+CIMI Request International Mobile Subscriber Identity
AT+CIMI Request International Mobile Subscriber Identity
Test Command
AT+CIMI=?
Response
OK
Execution
Command
AT+CIMI
Response
TA returns <IMSI>for identifying the individual SIM which is attached to
ME.
<IMSI> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 72 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<IMSI> International Mobile Subscriber Identity (string without
double quotes)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s
Reference
3GPP TS 27.007
[13]
Note
3.2.16 AT+CLCC List Current Calls of ME
AT+CLCC List Current Calls of ME
Response
+CLCC: (0,1)
OK
Test Command
AT+CLCC=?
Parameters
See Write Command
Response
+CLCC: <n>
OK
Read Command
AT+CLCC?
Parameters
See Write Command
Response
OK
Write Command
AT+CLCC=<n>
Parameters
<n> 0 Don’t report a list of current calls of ME automatically
when the current call status changes.
1 Report a list of current calls of ME automatically when the
current call status changes.
Execution
Command
AT+CLCC
Response
TA returns a list of current calls of ME.
Note: If Command succeeds but no calls are available, no information
response is sent to TE.
[+CLCC: <id1>,<dir>,<stat>,<mode>,<mpty>[,<number>,<type
>,<alphaID>]
[<CR><LF>+CLCC: <id2>,<dir>,<stat>,<mode>,<mpty> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 73 2015-08-03
[,<number>,<type>,<alphaID>][...]]]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<idx> 1..7 Call identification number
This number can be used in +CHLD command operations
<dir> 0 Mobile originated (MO) call
 1 Mobile terminated (MT) call
<stat> State of the call:
 0 Active
 1 Held
 2 Dialing (MO call)
 3 Alerting (MO call)
 4 Incoming (MT call)
 5 Waiting (MT call)
 6 Disconnect
<mode> Bearer/tele service:
 0 Voice
 1 Data
 2 Fax
<mpty> 0 Call is not one of multiparty (conference) call parties
 1 Call is one of multiparty (conference) call parties
<number> String type (string should be included in quotation marks)
phone number in format specified by <type>.
<type> Type of address
<alphaId> String type (string should be included in quotation marks)
alphanumeric representation of <number> corresponding to the entry
found in phone book.
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13][14]
Note
3.2.17 AT+CLCK Facility Lock
AT+CLCK Facility Lock
Test Command
AT+CLCK=?
Response
+CLCK: (list of supported <fac>s) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 74 2015-08-03
OK
Parameters
See Write Command
Response
This Command is used to lock, unlock or interrogate a ME or a network
facility <fac>. Password is normally needed to do such actions. When
querying the status of a network service (<mode>=2) the response line for
‘not active’ case (<status>=0) should be returned only if service is not
active for any <class>.
If <mode>≠2 and Command is successful
OK
If <mode>=2 and Command is successful
+CLCK: <status>[,<class1>[<CR><LF>+CLCK:
<status>,<class2>[…]]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CLCK=<fac>
,<mode>[,<passw
d>[,<class>]]
Parameters
<fac>
 "AO" BAOC (Barr All Outgoing Calls)
 "OI" BOIC (Barr Outgoing International Calls)
 "OX" BOIC-exHC (Barr Outgoing International Calls
except to Home Country)
 "AI" BAIC (Barr All Incoming Calls)
 "IR" BIC-Roam (Barr Incoming Calls when Roaming
outside the home country)
 "FD" SIM card or active application in the UICC (GSM or
USIM) fixed dialling memory feature (if PIN2 authentication has not been
done during the current session, PIN2 is required as <passwd>)
 "SC" SIM (lock SIM/UICC card) (SIM/UICC asks
password in MT power-up and when this lock command issued)
Correspond to PIN1 code.
 "PN" Network Personalization, Correspond to NCK code
 "PU" Network subset Personalization
 Correspond to NSCK code
 "PP" Service Provider Personalization
 Correspond to SPCK code
<mode> 0 unlock
 1 lock
 2 query status
<passwd> String type (Shall be the same as password specified for the 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 75 2015-08-03
facility from the MT user interface or with command Change Password
+CPWD)
<class> 1 Voice (telephony)
 2 Data refers to all bearer services; with <mode>=2 this
may refer only to some bearer service if TA does not support values 16,
32, 64 and 128)
 4 Fax (facsimile services)
 7 All classes
<status> 0 Not active
1 Active
Parameter Saving
Mode
NO_SAVE
Max Response
Time
15s
Reference
3GPP TS 27.007
[14]
Note
CME errors if SIM not inserted or PIN is not entered.
3.2.18 AT+CLIP Calling Line Identification Presentation
AT+CLIP Calling Line Identification Presentation
Response
+CLIP: (list of supported <n>s)
OK
Test Command
AT+CLIP=?
Parameters
See Write Command
Response
+CLIP: <n>, <m>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CLIP?
Parameters
See Write Command
Response
TA enables or disables the presentation of the CLI at the TE. It has no
effect on the execution of the supplementary service CLIP in the network.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CLIP=<n>
Parameters
<n> 0 Disable +CLIP notification. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 76 2015-08-03
1 Enable +CLIP notification.
<m> 0 CLIP not provisioned
 1 CLIP provisioned
 2 Unknown (e.g. no network, etc.)
Unsolicited Result Code
When the presentation of the CLI at the TE is enabled (and calling
subscriber allows), an unsolicited result code is returned after every RING
(or +CRING: <type>) at a mobile terminating call.
+CLIP: <number>,<type>[,<subaddr>,<satype>,<alphaId>,<CLI
validity>]
Parameters
<number> String type (string should be included in quotation marks)
phone number of calling address in format specified by <type>.
<type> Type of address octet in integer format;
129 Unknown type
161 National number type
145 International number type
177 Network specific number
<subaddr> String type (subaddress of format specified by <satype>)
<satype> Integer type (type of subaddress)
<alphaId> String type (string should be included in quotation marks)
alphanumeric representation of <number> corresponding to the entry
found in phone book.
<CLI validity>
0 CLI valid
1 CLI has been withheld by the originator.
2 CLI is not available due to interworking problems or
limitations of originating network.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
15s
Reference Note
3.2.19 AT+CLIR Calling Line Identification Restriction
AT+CLIR Calling Line Identification Restriction
Response
+CLIR: (list of supported <n>s)
OK
Test Command
AT+CLIR=?
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 77 2015-08-03
See Write Command
Response
+CLIR: <n>, <m>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CLIR?
Parameters
See Write Command
Response
TA restricts or enables the presentation of the CLI to the called party when
originating a call.
The Command overrides the CLIR subscription (default is restricted or
allowed) when temporary mode is provisioned as a default adjustment for
all following outgoing calls. This adjustment can be revoked by using the
opposite Command.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CLIR=<n>
Parameters
<n> (parameter sets the adjustment for outgoing calls):
 0 Presentation indicator is used according to the subscription of
the CLIR service.
 1 CLIR invocation
 2 CLIR suppression
<m> (parameter shows the subscriber CLIR service status in the
network):
 0 CLIR not provisioned
 1 CLIR provisioned in permanent mode
 2 Unknown (e.g. no network, etc.)
 3 CLIR temporary mode presentation restricted
 4 CLIR temporary mode presentation allowed

Parameter Saving
Mode
NO_SAVE
Max Response
Time
15s
Reference Note
3.2.20 AT+CMEE Report Mobile Equipment Error
AT+CMEE Report Mobile Equipment Error 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 78 2015-08-03
Response
+CMEE: (list of supported <n>s)
OK
Test Command
AT+CMEE=?
Parameters
See Write Command
Response
+CMEE: <n>
OK
Read Command
AT+CMEE?
Parameters
See Write Command
Response
TA disables or enables the use of result code +CME ERROR: <err> as an
indication of an error relating to the functionality of the ME.
OK
If error is related to ME functionality:
+CME ERROR:<err>
Write Command
AT+CMEE=[<n>
]
Parameters
<n> 0 Disable +CME ERROR: <err> result code and use ERROR
instead.
1 Enable +CME ERROR: <err> result code and use numeric
<err>
2 Enable +CME ERROR: <err> result code and use verbose
<err> values
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.21 AT+COLP Connected Line Identification Presentation
AT+COLP Connected Line Identification Presentation
Response
+COLP: (list of supported <n>s)
OK
Test Command
AT+COLP=?
Parameters
See Write Command
Read Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 79 2015-08-03
+COLP: <n>,<m>
OK
If error is related to ME functionality:
+CME ERROR: <err>
AT+COLP?
Parameters
See Write Command
Response
TA enables or disables the presentation of the COL (Connected Line) at the
TE for a mobile originated call. It has no effect on the execution of the
supplementary service COLR in the network.
Intermediate result code is returned from TA to TE before any +CR or
V.25ter responses.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<n> (parameter sets/shows the result code presentation status in the
TA):
 0 Disable +COLP notification
 1 Enable +COLP notification
<m> (parameter shows the subscriber COLP service status in the
network):
 0 COLP not provisioned
 1 COLP provisioned
 2 Unknown (e.g. no network, etc.)
Intermediate result code
When enabled (and called subscriber allows), an intermediate result code is
returned before any +CR or V.25ter responses:
+COLP: <number>,<type>[,<subaddr>,<satype> ,<alphaId>]
Write Command
AT+COLP=<n>
Parameters
<number> String type (string should be included in quotation marks)
phone number of format specified by <type>
<type> Type of address octet in integer format;
129 Unknown type
161 National number type
145 International number type
177 Network specific number
<subaddr> String type (string should be included in quotation marks)
sub address of format specified by <satype>
<satype> Type of sub address octet in integer format (refer GSM
04.08 [8] sub clause 10.5.4.8)
<alphaId> String type (string should be included in quotation marks) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 80 2015-08-03
alphanumeric representation of <number> corresponding to the entry
found in phone book.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
3.2.22 AT+COPS Operator Selection
AT+COPS Operator Selection
Response
TA returns a list of quadruplets, each representing an operator present in
the network. Any of the formats may be unavailable and should then be an
empty field. The list of operators shall be in order: home network,
networks referenced in SIM, and other networks.
+COPS: (list of supported<stat>,long alphanumeric<oper>,short
alphanumeric<oper>,numeric <oper>)s[,,(list of supported <mode>s),
(list of supported <format>s)]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+COPS=?
Parameters
See Write Command
Response
TA returns the current mode and the currently selected operator. If no
operator is selected, <format> and <oper> are omitted.
+COPS: <mode>[,<format>, <oper>]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+COPS?
Parameters
See Write Command
Write Command
AT+COPS=<mo
de>,[<format>[,<
oper>]]
Response
TA forces an attempt to select and register the GSM network operator. If
the selected operator is not available, no other operator shall be selected
(except <mode>=4). The selected operator name format shall apply to
further read commands (+COPS?).
 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 81 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<stat> 0 Unknown
 1 Operator available
 2 Operator current
 3 Operator forbidden
<oper> Refer to [27.007]
operator in format as per <format>
<mode> 0 Automatic mode; <oper> field is ignored
 1 Manual (<oper> field shall be present, and <AcT>
optionally)
 2 manual deregister from network
 3 set only <format> (for read Command +COPS?) - not
shown in Read Command response
4 Manual/automatic (<oper> field shall be present); if
 manual selection fails, automatic mode (<mode>=0) is
entered
<format> 0 Long format alphanumeric <oper>
 1 Short format alphanumeric <oper>
 2 Numeric <oper>; GSM Location Area Identification
number
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
Test command: 45 seconds
Write command: 120 seconds
Reference
3GPP TS 27.007
[14]
Note
3.2.23 AT+CPAS Phone Activity Status
AT+CPAS Phone Activity Status
Response
+CPAS: (list of supported <pas>s)
OK
Test Command
AT+CPAS=?
Parameters
See Execution Command
Execution
Command
AT+CPAS
Response
TA returns the activity status of ME.
+CPAS: <pas> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 82 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<pas> 0 Ready (MT allows commands from TA/TE)
2 Unknown (MT is not guaranteed to respond to
tructions)
 3 Ringing (MT is ready for commands from TA/TE, but the
ringer is active)
4 Call in progress (MT is ready for commands from TA/TE,
a call is in progress)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.24 AT+CPBF Find Phonebook Entries
AT+CPBF Find Phonebook Entries
Response
+CPBF: maximum length of field <nlength>,maximum length of field
<tlength>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CPBF=?
Parameters
See Write Command
Response
TA returns phone book entries(from the current phone book memory
storage selected with +CPBS) which contains alphanumeric string
<findtext>.
[+CPBF:<index1>,<number>,<type>,<text>]
[[…]<CR><LF>+CBPF:<index2>,<number>,<type>,<text>]
OK
Write Command
AT+CPBF=[<find
text>]
Parameters
<findtext> String type(string should be included in quotation marks)
field of maximum length <tlength> in current TE character set specified by 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 83 2015-08-03
+CSCS.
<index1> Integer type values in the range of location numbers of
phone book memory
<index2> Integer type values in the range of location numbers of phone
book memory
<number> String type (string should be included in quotation marks)
phone number of format <type>
<type> Type of address octet in integer format ;
129 Unknown type
145 International number type
<text> String type (string should be included in quotation marks) field
of maximum length <tlength> in current TE character set specified by
+CSCS.
<nlength> Integer type value indicating the maximum length of field
<number>
<tlength> Integer type value indicating the maximum length of field
<text>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
30 seconds (complete reading of a 250 records full phonebook)
3 seconds(string present in a 250 records full phonebook)
1 second(string not present)
We use the China Mobile sim cards for testing, which produced by Axalto
at 2010 for Shanghai. Use other sim cards may have different results.
Reference
3GPP TS 27.007
[13]
Note
3.2.25 AT+CPBR Read Current Phonebook Entries
AT+CPBR Read Current Phonebook Entries
Response
TA returns location range supported by the current storage as a compound
value and the maximum lengths of <number> and <text> fields.
+CPBR: (list of supported <index>s), <nlength>, <tlength>
OK
Test Command
AT+CPBR=?
Parameters
<index> Location number
<nlength> Max. length of phone number
<tlength> Max. length of text for number
Write Command
AT+CPBR=<inde
Response
TA returns phone book entries in location number range <index1>... 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 84 2015-08-03
<index2> from the current phone book memory storage selected with
+CPBS. If <index2> is left out, only location <index1> is returned.
+CPBR:<index1>,<number>,<type>,<text>
[[…]<CR><LF>+CPBR: <index2>, <number>, <type>, <text>]
OK
x1>[,<index2>]
Parameters
<index1> Read as of this location number
<index2> Read to this location number
<number> Phone number
<type> Type of number
<text> Text for phone number in current TE character set specified by
+CSCS.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
3 seconds (single reading)
30 seconds (complete reading of a 250 records full phonebook.
We use the China Mobile sim cards for testing, which produced by Axalto
at 2010 for Shanghai. Use other sim cards may have different results.
Reference
3GPP TS 27.007
[13]
Note
3.2.26 AT+CPBS Select Phonebook Memory Storage
AT+CPBS Select Phonebook Memory Storage
Response
+CPBS: (list of supported <storage>s)
OK
Test Command
AT+CPBS=?
Parameters
See Write Command
Response
+CPBS: <storage>,<used>,<total>
OK
Read Command
AT+CPBS?
Parameters
See Write Command
Write Command
AT+CPBS=<stora
ge>
Response
TA selects current phone book memory storage, which is used by other
phone book commands.
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 85 2015-08-03
Parameters
<storage>
"ON" SIM (or MT) own numbers (MSISDNs) list
(reading of this storage may be available through +CNUM
also). When storing information in the SIM/UICC, if a SIM
card is present or if a UICC with an active GSM application
is present, the information in EFMSISDN under
DFTelecom is selected.
"SM" SIM/UICC phonebook. If a SIM card is present or
if a UICC with an active GSM application is present, the
EFADN under DFTelecom is selected.
"ME" ME phonebook
"FD" SIM fix dialing-phone book. If a SIM card is
present or if a UICC with an active GSM application is
present, the information in EFFDN under DFTelecom is
selected
<used> Integer type value indicating the total number of used
 locations in selected memory
<total> Integer type value indicating the total number of locations
 in selected memory
Parameter Saving
Mode
NO_SAVE
Max Response
Time
3 seconds
Reference
3GPP TS 27.007
[13]
Note
3.2.27 AT+CPBW Write Phonebook Entry
AT+CPBW Write Phonebook Entry
Response
TA returns location range supported by the current storage, the maximum
length of <number> field, supported number formats of the storage, and
the maximum length of <text> field.
+CPBW: (list of supported <index>s), <nlength>, (list of supported
<type>s), <tlength>
OK
Test Command
AT+CPBW=?
Parameters
See Write Command
Write Command
AT+CPBW=<inde
Response
TA writes phone book entry in location number <index> in the current 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 86 2015-08-03
phone book memory storage selected with +CPBS. Entry fields written are
phone number <number> (in the format <type>) and text <text> associated
with the number. If those fields are omitted, phone book entry is deleted. If
<index> is left out, but <number> is given, entry is written to the first free
location in the phone book.
OK
x>[,<number>,[<t
ype>,[<text>]]]
Parameters
<nlength> Max length of phone number
<tlength> Max length of text for number
<index> Location number
<number> Phone number
<type> Type of number;
129 National number type
145 International number type
<text> String type (string should be included in quotation marks): text
for phone number in current TE character set specified by +CSCS.
Note: The following characters in <text> must be entered via the
escape sequence:
 GSM char. Seq. Seq.(hex) Note
 \ \5C 5C 35 43 (backslash)
 " \22 5C 32 32 (string delimiter)
 BSP \08 5C 30 38 (backspace)
 NULL \00 5C 30 30 (GSM null)
 ‘0’ (GSM null) may cause problems for application layer software
when reading string lengths.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
3 seconds
Reference
3GPP TS 27.007
[13]
Note
3.2.28 AT+CPIN Enter PIN
AT+CPIN Enter PIN
Test Command
AT+CPIN=?
Response
OK
Read Command
AT+CPIN?
Response
TA returns an alphanumeric string indicating whether some password is
required or not.
+CPIN: <code>
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 87 2015-08-03
Parameters
<code>
READY MT is not pending for any password
 SIM PIN MT is waiting SIM PIN to be given
 SIM PUK MT is waiting for SIM PUK to be given
 PH_SIM PIN ME is waiting for phone to SIM card (antitheft)
 PH_SIM PUK ME is waiting for SIM PUK (antitheft)
SIM PIN2 PIN2, e.g. for editing the FDN book possible only
if preceding Command was acknowledged with +CME
ERROR:17
SIM PUK2 Possible only if preceding Command was
acknowledged with error +CME ERROR: 18.
Response
TA stores a password which is necessary before it can be operated (SIM
PIN, SIM PUK, PH-SIM PIN, etc.).
If the PIN required is SIM PUK or SIM PUK2, the second pin is required.
This second pin, <new pin>, is used to replace the old pin in the SIM.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CPIN=<pin>[
,<new pin>]
Parameters
<pin> String type; password
<new pin> String type; If the PIN required is SIM PUK or SIMPUK2:
new password
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s
Reference
3GPP TS 27.007
[13]
Note
3.2.29 AT+CPWD Change Password
AT+CPWD Change Password
Response
TA returns a list of pairs which present the available facilities and the
maximum length of their password.
+CPWD: (list of supported <fac>s, list of supported <pwdlength>s)
OK
Test Command
AT+CPWD=?
Parameters
<fac> See Write Command
<pwdlength> Integer max. length of password 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 88 2015-08-03
Response
TA sets a new password for the facility lock function.
OK
Write Command
AT+CPWD=<fac
>,<oldpwd>,<new
pwd> Parameters
<fac>
 "AO" BAOC (Barr All Outgoing Calls)
 "OI" BOIC (Barr Outgoing International Calls)
 "OX" BOIC-exHC (Barr Outgoing International Calls
except to Home Country)
 "AI" BAIC (Barr All Incoming Calls)
 "IR" BIC-Roam (Barr Incoming Calls when Roaming
outside the home country)
 "AB" All Barring services
 "P2" SIM PIN2
 "SC" SIM (lock SIM/UICC card) (SIM/UICC asks password
in MT power-up and when this lock command issued) Correspond to PIN1
code.
<oldpwd> String type (string should be included in quotation marks):
password specified for the facility from the user interface or with
command. If an old password has not yet been set, <oldpwd> is not to
enter.
<newpwd> String type (string should be included in quotation marks):
new password
Parameter Saving
Mode
NO_SAVE
Max Response
Time
15s
Reference
3GPP TS 27.007
[13]
Note
3.2.30 AT+CR Service Reporting Control
AT+CR Service Reporting Control
Response
+CR: (list of supported <mode>s)
OK
Test Command
AT+CR=?
Parameters
See Write Command
Read Command
AT+CR?
Response
+CR: <mode>
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 89 2015-08-03
Parameters
See Write Command
Response
TA controls whether or not intermediate result code +CR: <serv> is
returned from the TA to the TE at a call set up.
OK
Parameters
<mode> 0 Disable
1 Enable
Intermediate result code
If enabled, an intermediate result code is transmitted at the point during
connect negotiation at which the TA has determined which speed and
quality of service will be used, before any error control or data
compression reports are transmitted, and before any final result code (e.g.
CONNECT) is transmitted.
+CR:<serv>
Write Command
AT+CR=[<mode
>]
Parameters
<serv> ASYNC Asynchronous transparent
 SYNC Synchronous transparent
 REL ASYNC Asynchronous non-transparent
 REL SYNC Synchronous non-transparent
 GPRS For GPRS
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.31 AT+CRC Set Cellular Result Codes for Incoming Call Indication
AT+CRC Set Cellular Result Codes for Incoming Call Indication
Response
+CRC: (list of supported <mode>s)
OK
Test Command
AT+CRC=?
Parameters
See Write Command
Read Command
AT+CRC?
Response
+CRC: <mode>
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 90 2015-08-03
Parameters
See Write Command
Response
TA controls whether or not the extended format of incoming call
indication is used.
OK
Parameters
<mode> 0 Disable extended format
1 Enable extended format
Omitted Use previous value
Unsolicited Result Code
When enabled, an incoming call is indicated to the TE with unsolicited
result code +CRING: <type> instead of the normal RING.
Write Command
AT+CRC=[<mod
e>]
Parameters
<type> ASYNC Asynchronous transparent
 SYNC Synchronous transparent
 REL ASYNC Asynchronous non-transparent
 REL SYNC Synchronous non-transparent
 FAX Facsimile
 VOICE Voice
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.32 AT+CREG Network Registration
AT+CREG Network Registration
Response
+CREG: (list of supported <n>s)
OK
Test Command
AT+CREG=?
Parameters
See Write Command
Read Command
AT+CREG?
Response
TA returns the status of result code presentation and an integer <stat>
which shows whether the network has currently indicated the registration
of the ME. Location information elements <lac> and <ci> are returned
only when <n>=2 and ME is registered in the network.
+CREG: <n>,<stat>[,<lac>,<ci>] 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 91 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
Response
TA controls the presentation of an unsolicited result code +CREG: <stat>
when <n>=1 and there is a change in the ME network registration status.
OK
Parameters
<n> 0 Disable network registration unsolicited result code
1 Enable network registration unsolicited result code
+CREG: <stat>
2 Enable network registration unsolicited result code with
location information +CREG: <stat>[,<lac>,<ci>]
<stat> 0 Not registered, MT is not currently searching a new
operator to register to
 1 Registered, home network
 2 Not registered, but MT is currently searching a new
operator to register to
 3 Registration denied
 4 Unknown
 5 Registered, roaming
<lac> String type (string should be included in quotation marks);
two byte location area code in hexadecimal format
<ci> String type (string should be included in quotation marks);
two byte cell ID in hexadecimal format
Unsolicited Result Code
If <n>=1 and there is a change in the MT network registration status
+CREG: <stat>
If <n>=2 and there is a change in the MT network registration status or a
change of the network cell:
+CREG: <stat>[,<lac>,<ci>]
Write Command
AT+CREG=[<n>
]
Parameters
See Write Command
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 92 2015-08-03
3.2.33 AT+CRLP Select Radio Link Protocol Parameters
AT+CRLP Select Radio Link Protocol Parameters
Response
TA returns values supported. RLP versions 0 and 1 share the same
parameter set.
+CRLP: (list of supported <iws>s),(list of supported <mws>s),(list of
supported <T1>s),(list of supported <N2>s),(list of supported <T4>s)
OK
Test Command
AT+CRLP=?
Parameters
See Write Command
Response
TA returns current settings for RLP version. RLP versions 0 and 1 share
the same parameter set.
+CRLP: <iws>,<mws>,<T1>,<N2>,<T4>
OK
Read Command
AT+CRLP?
Parameters
See Write Command
Response
TA sets radio link protocol (RLP) parameters used when non-transparent
data calls are setup.
OK
Write Command
AT+CRLP=<iws
>[,<mws>[,<T1>[
,<N2>[,<T4>]]]]
Parameters
<iws> 0-61 Interworking window size (IWF to MS)
<mws> 0-61 Mobile window size(MS to IWF)
<T1> 44-255 Acknowledgment timer T1 in 10 ms units
<N2> 1-255 Retransmission attempts N2
<T4> 7 Re-sequencing period in integer format, in units of 10 ms.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Simcom redefine param`s value range
3.2.34 AT+CRSM Restricted SIM Access
AT+CRSM Restricted SIM Access
Test Command
AT+CRSM=?
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 93 2015-08-03
Response
+CRSM: <sw1>, <sw2>[,<response>]
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CRSM=<Co
mmand>[,<fileId
>[,<P1>,<P2>,<P
3>[,<data>]]]
Parameters
<Command>
176 READ BINARY
178 READ RECORD
192 GET RESPONSE
214 UPDATE BINARY
220 UPDATE RECORD
242 STATUS
All other values are reserved; refer GSM 11.11.
<fileId> Integer type; this is the identifier for an elementary data file on
SIM. Mandatory for every Command except STATUS
<P1>,<P2>,<P3> Integer type, range 0 – 255
Parameters to be passed on by the ME to the SIM; refer GSM
11.11.
<data> Information which shall be written to the SIM (hex-decimal
character format)
<sw1>, <sw2> Integer type, range 0 - 255
Status information from the SIM about the execution of the
actual Command. These parameters are delivered to the TE in
both cases, on successful or failed execution of the Command;
refer GSM 11.11.
<response> Response of a successful completion of the Command
previously issued (hexadecimal character format)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
GSM 11.11
Note
3.2.35 AT+CSQ Signal Quality Report
AT+CSQ Signal Quality Report
Test Command
AT+CSQ=?
Response
+CSQ: (list of supported <rssi>s),(list of supported <ber>s) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 94 2015-08-03
OK
Response
+CSQ: <rssi>,<ber>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution Command returns received signal strength indication <rssi>
and channel bit error rate <ber> from the ME. Test Command returns
values supported by the TA.
Execution
Command
AT+CSQ
Parameters
<rssi>
0 -115 dBm or less
1 -111 dBm
2...30 -110... -54 dBm
31 -52 dBm or greater
99 not known or not detectable
<ber> (in percent):
0...7 As RXQUAL values in the table in GSM 05.08 [20]
subclause 7.2.4
99 Not known or not detectable
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.36 AT+VTD Tone Duration
AT+VTD Tone Duration
Response
+VTD: (list of supported <n>s)
OK
Test Command
AT+VTD=?
Parameters
See Write Command
Response
+VTD: <n>
OK
Read Command
AT+VTD?
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 95 2015-08-03
See Write Command
Response
This command refers to an integer <n> that defines the length of tones
emitted as a result of the +VTS command. This does not affect the D
command.
OK
Write Command
AT+VTD=<n>
Parameters
<n> 1-255 Duration of the tone in 1/10 seconds
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.37 AT+VTS DTMF and Tone Generation
AT+VTS DTMF and Tone Generation
Response
+VTS: (list of supported <dtmf>s),(list of supported <duration>s)
OK
Test Command
AT+VTS=?
Parameters
See Write Command
Write Command
Generate tone
Duration is set by
+VTD
AT+VTS=<dtmfstring>
Response
This Command allows the transmission of DTMF tones and arbitrary
tones in voice mode. These tones may be used (for example) when
announcing the start of a recording period.
Note: D is used only for dialing.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Note: The Command is writing only.
Parameters
<dtmf-string> Which has a max length of 20 characters, must be entered
between double quotes ("") and consists of combinations of the following
separated by commas. But a single character does not require quotes.
1) <dtmf> A single ASCII characters in the set 0-9, #,*, A-D.
This is interpreted as a sequence of DTMF tones whose duration
is set by the +VTD Command.
2) {<dtmf>, <duration>} This is interpreted as a DTMF tone 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 96 2015-08-03
whose duration is determined by <duration>.
<duration> Duration of the tone in 1/10 seconds range :1-255
Parameter Saving
Mode
NO_SAVE
Max Response
Time
Number of DTMF characters*duration.
Reference
3GPP TS 27.007
[13]
Note
3.2.38 AT+CMUX Multiplexer Control
AT+CMUX Multiplexer Control
Response
+CMUX: (0)
OK
Test Command
AT+CMUX=?
Parameters
See Write Command
Response:
+CMUX:[<mode>[,<subset>[,<port_speed>[,<N1>[,<T1>[,<N2>[,<T2
>[,<T3>[,<k>]]]]]]]]]
OK
ERROR
Read Command
AT+CMUX?
Parameters
<mode> Multiplexer transparency mechanism
0 Basic option
<subset> The way in which the multiplexer control channel is set up
0 UIH frames used only
<port_speed> Transmission rate
 1 9600 bits/t
 2 19200 bits/t
 3 38400 bits/t
 4 57600 bits/t
5 115200 bit/s
 6 230400 bits/t
 7 460800 bits/t
 Proprietary values, available if MUX NEW PORT
SPEED FTR is activated
<N1> Maximum frame size
1-255 Default: 127
<T1> Acknowledgement timer in units of ten milliseconds
1-255 Default:10 (100 ms) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 97 2015-08-03
<N2> Maximum number of re-transmissions
0-100 Default:3
<T2> Max Response Timer for the multiplexer control channel in
units of ten milliseconds
2-255 Default:30
<T3> Wake up Max Response Timers in seconds
1-255 Default:10
<k> Window size, for Advanced operation with Error Recovery
options
1-7 Default:2
Response
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CMUX=<mo
de>
Parameters
<mode> Multiplexer transparency mechanism
0 Basic option
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
The multiplexing transmission rate is according to the current serial baud
rate. It is recommended to enable multiplexing protocol under 115200
bit/s baud rate
Multiplexer control channels are listed as follows:
Channel Number Type DLCI
None Multiplexer Control 0
1 3GPP TS 27.007 and 005 1
2 3GPP TS 27.007 and 005 2
3 3GPP TS 27.007 and 005 3
4 3GPP TS 27.007 and 005 4
3.2.39 AT+CNUM Subscriber Number
AT+CNUM Subscriber Number
Test Command
AT+CNUM=?
Response
OK
Execution
Command
AT+CNUM
Response
+CNUM: [<alpha1>],<number1>,<type1>[,<speed>,<service>]
[<CR><LF>+CNUM:[<alpha2>],<number2>,<type2>[,<speed>,<serv
ice>]
[...]] 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 98 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<alphax> Optional alphanumeric string associated with <numberx>;
used character set should be the one selected with Command Select TE
Character Set +CSCS
<numberx> String type (string should be included in quotation marks)
phone number of format specified by <typex>
<typex> Type of address octet in integer format (refer GSM04.08[8]
 subclause 10.5.4.7)
<speed> As defined by the +CBST Command
<service> (service related to the phone number:)
0 Asynchronous modem
1 Synchronous modem
2 PAD Access (asynchronous)
3 Packet Access (synchronous)
4 Voice
5 Fax
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.40 AT+CPOL Preferred Operator List
AT+CPOL Preferred Operator List
Response
+CPOL: (list of supported <index>s),(list of supported <format>s)
OK
Test Command
AT+CPOL=?
Parameters
See Write Command
Read Command
AT+CPOL?
Response
+CPOL: <index1>,<format>,<oper1>
[<CR><LF>+CPOL: <index2>,<format>,<oper2>[…]]
OK
If error is related to ME functionality:
+CME ERROR: <err>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 99 2015-08-03
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CPOL=<ind
ex>[,<format>,<o
per>]
Parameters
<index> Integer type: order number of operator in SIM preferred
operator list
<format> Indicates whether alphanumeric or numeric
 format used (see +COPS Command)
0 Long format alphanumeric <oper>
 1 Short format alphanumeric <oper>
 2 Numeric <oper>
<oper> String type(string should be included in quotation marks)
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.41 AT+COPN Read Operator Names
AT+COPN Read Operator Names
Test Command
AT+COPN=?
Response
OK
Response
+COPN: <numeric1>,<alpha1>
[<CR><LF>+COPN: <numeric2>,<alpha2>
[…]]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+COPN
Parameters
<numericn> String type (string should be included in quotation marks):
operator in numeric format (see +COPS)
<alphan> String type (string should be included in quotation marks):
operator in long alphanumeric format (see +COPS)
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 100 2015-08-03
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.42 AT+CFUN Set Phone Functionality
AT+CFUN Set Phone Functionality
Response
+CFUN: (list of supported <fun>s),(list of supported <rst>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CFUN=?
Parameters
See Write Command
Response
+CFUN: <fun>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CFUN?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CFUN=<fun
>[,<rst>]
Parameters
<fun> 0 Minimum functionality
1 Full functionality (Default)
4 Disable phone both transmit and receive RF circuits.
<rst> 1 Reset the MT before setting it to <fun> power level.
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
10s
Reference
3GPP TS 27.007
[13]
Note
Minimum functionality mode (AT+CFUN=0)and RF disabled
functionality mode (AT+CFUN=4) cannot be switched to each other.
The <fun> power level will be written to flash except minimum
functionality. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 101 2015-08-03
AT+CFUN=1,1 can be used to reset module purposely at minimum/full
functionality mode.
Response string "OK" will be returned after module resets if baud rate is
set to fixed baud rate.
3.2.43 AT+CCLK Clock
AT+CCLK Clock
Test Command
AT+CCLK=?
Response
OK
Response
+CCLK: <time>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CCLK?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CCLK=<tim
e>
Parameters
<time> String type(string should be included in quotation marks)
value; format is "yy/MM/dd,hh:mm:ss±zz", where characters indicate
year (two last digits),month, day, hour, minutes, seconds and time zone
(indicates the difference, expressed in quarters of an hour, between the
local time and GMT; range -47...+48). E.g. 6th of May 2010, 00:01:52
GMT+2 hours equals to "10/05/06,00:01:52+08".
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
Only time zone is auto saved.
3.2.44 AT+CSIM Generic SIM Access
AT+CSIM Generic SIM Access
Test Command
AT+CSIM=?
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 102 2015-08-03
Response
+CSIM: <length>,<response>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CSIM=<leng
th>,<Command>
Parameters
<length> Integer type: length of characters sent to the TE in
<Command> or <response> (i.e. twice the number of octets in the raw
data).
<Command> String type (string should be included in quotation
marks): hex format: GSM 11.11 SIM Command sent from the ME to the
SIM.
<response> String type(string should be included in quotation
marks): hex format: GSM 11.11 response from SIM to <Command>.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.45 AT+CALM Alert Sound Mode
AT+CALM Alert Sound Mode
Response
+CALM: (list of supported <mode>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CALM=?
Parameters
See Write Command
Response
+CALM: <mode>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CALM?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 103 2015-08-03
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CALM=<mo
de>
Parameters
<mode> 0 Normal mode
 1 Silent mode (all sounds from ME are prevented)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
If CALM is set to silent mode before, when user sets CALM to normal
mode during an incoming call, the module maintains silent this time. But
next time the normal mode works.
3.2.46 AT+CALS Alert Sound Select
AT+CALS Alert Sound Select
Response
+CALS: (list of supported <n>s),(list of supported <switch>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CALS=?
Parameters
See Write Command
Response
+CALS: <n>,<switch>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CALS?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CALS=<n>[,
<switch>]
Parameters
<n> 0-19 Alert sound type
<switch> 0 stop playing ring tone
 1 start to play ring tone 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 104 2015-08-03
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
3.2.47 AT+CRSL Ringer Sound Level
AT+CRSL Ringer Sound Level
Response
+CRSL: (list of supported <level>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CRSL=?
Parameter
See Write Command
Response
+CRSL: <level>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CRSL?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CRSL=<leve
l>
Parameters
<level> integer type value (0-100) with manufacturer specific range
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.48 AT+CLVL Loud Speaker Volume Level
AT+CLVL Loud Speaker Volume Level 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 105 2015-08-03
Response
+CLVL: (list of supported <level>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CLVL=?
Parameters
See Write Command
Response
+CLVL: <level>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CLVL?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CLVL=<leve
l>
Parameters
<level> 0-100 Integer type value with manufacturer specific range
(smallest value represents the lowest sound level).
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3.2.49 AT+CMUT Mute Control
AT+CMUT Mute Control
Response
+CMUT: (list of supported <n>s)
OK
Test Command
AT+CMUT=?
Parameters
See Write Command
Read Command
AT+CMUT?
Response
+CMUT: <n>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 106 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CMUT=<n>
Parameters
<n> 0 Mute off
 1 Mute on
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
Only during a call this command can be set successfully.
3.2.50 AT+CPUC Price Per Unit and Currency Table
AT+CPUC Price Per Unit and Currency Table
Test Command
AT+CPUC=?
Response
OK
Response
+CPUC: <currency>,<ppu>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CPUC?
Parameters
See Write Command
Response
OK
+CME ERROR: <err>
Write Command
AT+CPUC=<cur
rency>,<ppu>[,<
passwd>] Parameters
<currency> String type (string should be included in quotation marks);
three-character currency code (e.g. "GBP", "DEM");character set as
specified by "AT+CSCS" command
<ppu> String type (string should be included in quotation marks); price 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 107 2015-08-03
per unit; dot is used as a decimal separator(e.g. "2.66")
<passwd> String type (string should be included in quotation marks);
SIM PIN2
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s
Reference
3GPP TS 27.007
[13]
Note
3.2.51 AT+CCWE Call Meter Maximum Event
AT+CCWE Call Meter Maximum Event
Response
+CCWE: (list of supported <mode>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CCWE=?
Parameters
See Write Command
Response
+CCWE: <mode>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CCWE?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<mode> 0 Disable call meter warning event
 1 Enable call meter warning event
Write Command
AT+CCWE=<m
ode>
Unsolicited result codes supported:
+CCWV Shortly before the ACM (Accumulated Call Meter)
maximum value is reached, an unsolicited result code +CCWV will be
sent, if enabled by this command. The warning is issued approximately
when 5 seconds call time remains. It is also issued when starting a call if
less than 5 s call time remains. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 108 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
3GPP TS 27.007 specifies 30 seconds, so SIMCom deviates from the
specification.
3.2.52 AT+CBC Battery Charge
AT+CBC Battery Charge
Response
+CBC: (list of supported <bcs>s),(list of supported <bcl>s),(<voltage>)
OK
Test Command
AT+CBC=?
Parameters
See Execution Command
Response
+CBC: <bcs>, <bcl>,<voltage>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+CBC
Parameters
<bcs> Charge status
0 ME is not charging
1 ME is charging
2 Charging has finished
<bcl> Battery connection level
 1...100 battery has 1-100 percent of capacity remaining
vent
<voltage> Battery voltage(mV)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.007
[13]
Note
This command depends on hardware and only be used when battery is
charging.
3.2.53 AT+CUSD Unstructured Supplementary Service Data
AT+CUSD Unstructured Supplementary Service Data 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 109 2015-08-03
Response
+CUSD: (list of supported <n>s)
OK
Test Command
AT+CUSD=?
Parameters
See Write Command
Response
+CUSD: <n>
OK
Read Command
AT+CUSD?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CUSD=<n>[,
<str>[,<dcs>]]
Parameters
<n> A numeric parameter which indicates control of the unstructured
supplementary service data
 0 disable the result code presentation in the TE
1 enable the result code presentation in the TE
2 cancel session (not applicable to read Command response)
<str> String type (string should be included in quotation marks)
USSD-string
<dcs> Cell Broadcast Data Coding Scheme in integer format
(default 0)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
GSM 03.38 [25]
Note
When ussd is not suport or return error,TE will print +CUSD:4.
3.2.54 AT+CSSN Supplementary Services Notification
AT+CSSN Supplementary Services Notification
Response
+CSSN: (list of supported <n>s),(list of supported <m>s)
OK
Test Command
AT+CSSN=?
Parameters
See Write Command
Read Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 110 2015-08-03
+CSSN: <n>,<m>
OK
AT+CSSN?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CSSN=<n>[,
<m>]
Parameters
<n> A numeric parameter which indicates whether to show the
+CSSI:<code1>[,<index>] result code presentation status after a mobile
originated call setup
 0 disable
1 enable
<m> A numeric parameter which indicates whether to show the
+CSSU: <code2> result code presentation status during a mobile
terminated call setup or during a call, or when a forward check
supplementary service notification is received.
0 disable
1 enable
<code1> 0 Unconditional call forwarding is active
 1 Some of the conditional call forwarding are active
 2 Call has been forwarded
 3 Call is waiting
 4 This is a CUG call (also <index> present)
 5 Outgoing calls are barred
 6 Incoming calls are barred
 7 CLIR suppression rejected
<index> Closed user group index
<code2> 0 This is a forwarded call
 1 This is a CUG call (also <index> present) (MT call
setup)
 2 Call has been put on hold (during a voice call)
 3 Call has been retrieved (during a voice call)
 4 Multiparty call entered (during a voice call)
 5 Call on hold has been released (this is not a SS
notification) (during a voice call)
 6 Forward check SS message received (can be received
whenever)
 7 Call is being connected (alerting) with the remote party
in alerting state in explicit call transfer operation (during a voice call)
 8 Call has been connected with the other remote party in
explicit call transfer operation (also number and subaddress parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 111 2015-08-03
may be present) (during a voice call or MT call setup)
 9 This is a deflected call (MT call setup)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 112 2015-08-03
4 AT Commands According to 3GPP TS 27.005
The 3GPP TS 27.005 commands are for performing SMS and CBS related operations. SIM800
Series supports both Text and PDU modes.
4.1 Overview of AT Commands According to 3GPP TS 27.005
Command Description
AT+CMGD Delete SMS message
AT+CMGF Select SMS message format
AT+CMGL List SMS messages from preferred store
AT+CMGR Read SMS message
AT+CMGS Send SMS message
AT+CMGW Write SMS message to memory
AT+CMSS Send SMS message from storage
AT+CNMI New SMS message indications
AT+CPMS Preferred SMS message storage
AT+CRES Restore SMS settings
AT+CSAS Save SMS settings
AT+CSCA SMS service center address
AT+CSCB Select cell broadcast SMS messages
AT+CSDH Show SMS text mode parameters
AT+CSMP Set SMS text mode parameters
AT+CSMS Select message service
4.2 Detailed Descriptions of AT Commands According to 3GPP TS 27.005
4.2.1 AT+CMGD Delete SMS Message
AT+CMGD Delete SMS Message
Response
+CMGD: (list of supported <index>s),(list of supported <delflag>s)
OK
Test Command
AT+CMGD=?
Parameters
See Write Command
Write Command
AT+CMGD=<in
dex>[,<delflag>]
Response
TA deletes message from preferred message storage <mem1> location
<index>.
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 113 2015-08-03
ERROR
If error is related to ME functionality:
+CMS ERROR:<err>
Parameters
<index> Integer type; value in the range of location numbers supported by
the associated memory
<delflag> 0 Delete the message specified in <index>
1 Delete all read messages from preferred message storage,
leaving unread messages and stored mobile originated
messages (whether sent or not) untouched
2 Delete all read messages from preferred message storage
and sent mobile originated messages, leaving unread
messages and unsent mobile originated messages
untouched
3 Delete all read messages from preferred message storage,
sent and unsent mobile originated messages leaving
unread messages untouched
4 Delete all messages from preferred message storage
including unread messages
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s（delete 1 message）
25s（delete 50 messages）
25s（delete 150 messages）
Reference
3GPP TS 27.005
Note
4.2.2 AT+CMGF Select SMS Message Format
AT+CMGF Select SMS Message Format
Response
+CMGF: (list of supported <mode>s)

OK
Test Command
AT+CMGF=?
Parameter
See Write Command
Response
+CMGF: <mode>
OK
Read Command
AT+CMGF?
Parameter
See Write Command
Write Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 114 2015-08-03
TA sets parameter to denote which input and output format of messages to
use.
OK
AT+CMGF=[<m
ode>]
Parameter
<mode> 0 PDU mode
1 Text mode
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.005
Note
4.2.3 AT+CMGL List SMS Messages from Preferred Store
AT+CMGL List SMS Messages from Preferred Store
Response
+CMGL: (list of supported <stat>s)
OK
Test Command
AT+CMGL=?
Parameter
See Write Command
Parameters
1) If text mode:
<stat> "REC UNREAD" Received unread messages
 "REC READ" Received read messages
 "STO UNSENT" Stored unsent messages
 "STO SENT" Stored sent messages
 "ALL" All messages
<mode> 0 Normal
 1 Not change status of the specified SMS record
2) If PDU mode:
<stat> 0 Received unread messages
 1 Received read messages
 2 Stored unsent messages
 3 Stored sent messages
 4 All messages
<mode> 0 Normal
 1 Not change status of the specified SMS record
Write Command
AT+CMGL=<sta
t>[,<mode>]
Response
TA returns messages with status value <stat> from message storage
<mem1> to the TE. If status of the message is 'received unread', status in the
storage changes to 'received read'. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 115 2015-08-03
1) If text mode (+CMGF=1) and Command successful:
for SMS-SUBMITs and/or SMS-DELIVERs:
+CMGL: <index>,<stat>,<oa/da>[,<alpha>][,<scts>]
[,<tooa/toda>,<length>]<CR><LF><data>
[<CR><LF>+CMGL: <index>,<stat>,<da/oa>
[,<alpha>][,<scts>][,<tooa/toda>,<length>]<CR><LF><data>[...]]
for SMS-STATUS-REPORTs:
+CMGL: <index>,<stat>,<fo>,<mr>[,<ra>][,<tora>],<scts>,<dt>,<st>
[<CR><LF>+CMGL: <index>,<stat>,<fo>,<mr>
[,<ra>][,<tora>],<scts>,<dt>,<st>[...]]
for SMS-COMMANDs:
+CMGL: <index>,<stat>,<fo>,<ct>[<CR><LF>
+CMGL: <index>,<stat>,<fo>,<ct>[...]]
for CBM storage:
+CMGL:<index>,<stat>,<sn>,<mid>,<page>,<pages>
<CR><LF><data>
<CR><LF>+CMGL: <index>,<stat>,<sn>,<mid>,<page>,<pages>
<CR><LF><data>[...]]
OK
2) If PDU mode (+CMGF=0) and Command successful:
+CMGL:<index>,<stat>[,<alpha>],<length>
<CR><LF><pdu><CR><LF>
+CMGL: <index>,<stat>[,alpha],<length>
<CR><LF><pdu>[...]]
OK
3)If error is related to ME functionality:
+CMS ERROR: <err>
Parameters
<alpha> String type(string should be included in quotation marks)
alphanumeric representation of <da> or <oa> corresponding to the entry
found in MT phonebook; implementation of this feature is manufacturer
specific; used character set should be the one selected with Command Select
TE Character Set +CSCS (see definition of this Command in 3GPP TS
27.007)
<da> GSM 03.40 TP-Destination-Address Address-Value field in
string format; BCD numbers (or GSM default alphabet characters) are
converted to characters of the currently selected TE character set (refer
Command+CSCS in 3GPP TS 27.007); type of address given by <toda>
<data> In the case of SMS: GSM 03.40 TP-User-Data in text mode
responses; format:
- if <dcs> indicates that GSM 03.38 default alphabet is used and 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 116 2015-08-03
<fo> indicates that GSM 03.40 TPUser-Data-Header-Indication
is not set:
- if TE character set other than "HEX" (refer Command Select
TE Character Set +CSCS in 3GPP TS 27.007):ME/TA converts
GSM alphabet into current TE character set according to rules
of Annex A
- if TE character set is "HEX": ME/TA converts each 7-bit
character of GSM alphabet into two IRA character long
hexadecimal number (e.g. character P (GSM 23) is presented as
17 (IRA 49 and 55))
- if <dcs> indicates that 8-bit or UCS2 data coding scheme is
used, or <fo> indicates that GSM 03.40
TP-User-Data-Header-Indication is set: ME/TA converts each
8-bit octet into two IRA character long hexadecimal number
(e.g. octet with integer value 42 is presented to TE as two
characters 2A (IRA 50 and 65)) In the case of CBS: GSM 03.41
CBM Content of Message in text mode responses; format:
- if <dcs> indicates that GSM 03.38 default alphabet is used:
- if TE character set other than "HEX" (refer Command +CSCS
in 3GPP TS 27.007): ME/TA converts GSM alphabet into
current TE character set according to rules of Annex A
- if TE character set is "HEX": ME/TA converts each 7-bit
character of GSM alphabet into two IRA character long
hexadecimal number
- if <dcs> indicates that 8-bit or UCS2 data coding scheme is
used: ME/TA converts each 8-bit octet into two IRA character
long hexadecimal number
<length> Integer type value indicating in the text mode (+CMGF=1)
the length of the message body <data> (or <cdata>) in characters; or in
PDU mode (+CMGF=0), the length of the actual TP data unit in octets (i.e.
the RP layer SMSC address octets are not counted in the length)
<index> Integer type; value in the range of location numbers supported
by the associated memory
<oa> GSM 03.40 TP-Originating-Address Address-Value field in
string format; BCD numbers (or GSM default alphabet characters) are
converted to characters of the currently selected TE character set (refer
Command +CSCS in 3GPP TS 27.007); type of address given by <tooa>
<pdu> In the case of SMS: GSM 04.11 SC address followed by
GSM 03.40 TPDU in hexadecimal format: ME/TA converts each octet of
TP data unit into two IRA character long hexadecimal number (e.g. octet
with integer value 42 is presented to TE as two characters 2A (IRA 50 and
65)). In the case of CBS: GSM 03.41 TPDU in hexadecimal format.
<scts> GSM 03.40 TP-Service-Center-Time-Stamp in time-string
format (refer <dt>) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 117 2015-08-03
<toda> GSM 04.11 TP-Destination-Address Type-of-Address octet
in integer format (when first character of <da> is + (IRA 43) default is 145,
otherwise default is 129)
<tooa> GSM 04.11 TP-Originating-Address Type-of-Address octet in
integer format (default refer<toda>)
1) If text mode:
the same as AT+CMGL="REC UNREAD", received unread messages
2) If PDU mode:
the same as AT+CMGL=0, received unread messages
See more messages please refer to Write Command.
Execution
Command
AT+CMGL
Parameters
See Write Command
Parameter Saving
Mode
NO_SAVE
Max Response
Time
20s(list 50 messages)
20s(list 150 messages)
Reference
3GPP TS 27.005
Note
4.2.4 AT+CMGR Read SMS Message
AT+CMGR Read SMS Message
Test Command
AT+CMGR=?
Response
OK
Parameters
<index> Integer type; value in the range of location numbers supported
by the associated memory
<mode> 0 Normal
 1 Not change status of the specified SMS record
Write Command
AT+CMGR=<in
dex>[,<mode>]
Response
TA returns SMS message with location value <index> from message storage
<mem1> to the TE. If status of the message is 'received unread', status in the
storage changes to 'received read'.
1) If text mode (+CMGF=1) and Command successful:
for SMS-DELIVER:
+CMGR: <stat>,<oa>[,<alpha>],<scts>[,<tooa>,<fo>,<pid>,<dcs>
,<sca>,<tosca>,<length>]<CR><LF><data>
for SMS-SUBMIT:
+CMGR: <stat>,<da>[,<alpha>][,<toda>,<fo>,<pid>,<dcs>[,<vp>]
,<sca>,<tosca>,<length>]<CR><LF><data>
for SMS-STATUS-REPORTs: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 118 2015-08-03
+CMGR: <stat>,<fo>,<mr>[,<ra>][,<tora>],<scts>,<dt>,<st>
for SMS-COMMANDs:
+CMGR: <stat>,<fo>,<ct>[,<pid>[,<mn>][,<da>][,<toda>]
,<length><CR><LF><cdata>]
for CBM storage:
+CMGR: <stat>,<sn>,<mid>,<dcs>,<page>,<pages><CR><LF><data>
2) If PDU mode (+CMGF=0) and Command successful:
+CMGR: <stat>[,<alpha>],<length><CR><LF><pdu>
OK
3) If error is related to ME functionality:
+CMS ERROR: <err>
Parameters
<alpha> String type (string should be included in quotation marks)
alphanumeric representation of <da> or <oa> corresponding to the entry
found in MT phonebook; implementation of this feature is manufacturer
specific
<da> GSM 03.40 TP-Destination-Address Address-Value field in
string format; BCD numbers (or GSM default alphabet characters) are
converted to characters of the currently selected TE character set (specified
by +CSCS in 3GPP TS 27.007); type of address given by <toda>
<data> In the case of SMS: GSM 03.40 TP-User-Data in text mode
responses; format:
- if <dcs> indicates that GSM 03.38 default alphabet is used and
<fo> indicates that GSM 03.40 TPUser-Data-Header-Indication
is not set:
- if TE character set other than "HEX" (refer Command Select
TE Character Set +CSCS in 3GPP TS 27.007):ME/TA converts
GSM alphabet into current TE character set according to rules
of Annex A
- if TE character set is "HEX": ME/TA converts each 7-bit
character of GSM alphabet into two IRA character long
hexadecimal number (e.g. character P (GSM 23) is presented as
17 (IRA 49 and 55))
- if <dcs> indicates that 8-bit or UCS2 data coding scheme is
used, or <fo> indicates that GSM 03.40
TP-User-Data-Header-Indication is set: ME/TA converts each
8-bit octet into two IRA character long hexadecimal number
(e.g. octet with integer value 42 is presented to TE as two
characters 2A (IRA 50 and 65)) In the case of CBS: GSM 03.41
CBM Content of Message in text mode responses; format:
- if <dcs> indicates that GSM 03.38 default alphabet is used:
- if TE character set other than "HEX" (refer Command +CSCS
in 3GPP TS 27.007): ME/TA converts GSM alphabet into 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 119 2015-08-03
current TE character set according to rules of Annex A
- if TE character set is "HEX": ME/TA converts each 7-bit
character of GSM alphabet into two IRA character long
hexadecimal number
- if <dcs> indicates that 8-bit or UCS2 data coding scheme is
used: ME/TA converts each 8-bit octet into two IRA character
long hexadecimal number
<dcs> Depending on the Command or result code: GSM 03.38 SMS
Data Coding Scheme (default 0), or Cell Broadcast Data Coding Scheme in
integer format
<fo> Depending on the Command or result code: first octet of
GSM 03.40 SMS-DELIVER, SMS-SUBMIT (default 17),
SMS-STATUS-REPORT, or SMS-COMMAND (default 2) in integer
format
<length> integer type value indicating in the text mode (+CMGF=1)
the length of the message body <data> (or <cdata>) in characters; or in
PDU mode (+CMGF=0), the length of the actual TP data unit in octets (i.e.
the RP layer SMSC address octets are not counted in the length)
<mid> GSM 03.41 CBM Message Identifier in integer format
<oa> GSM 03.40 TP-Originating-Address Address-Value field in
string format; BCD numbers (or GSM default alphabet characters) are
converted characters of the currently selected TE character set (specified by
+CSCS in 3GPP TS 27.007); type of address given by <tooa>
<pdu> In the case of SMS: GSM 04.11 SC address followed by
GSM 03.40 TPDU in hexadecimal format: ME/TA converts each octet of
TP data unit into two IRA character long hexadecimal number (e.g. octet
with integer value 42 is presented to TE as two characters 2A (IRA 50 and
65)). In the case of CBS: GSM 03.41 TPDU in hexadecimal format.
<pid> GSM 03.40 TP-Protocol-Identifier in integer format
 (default 0)
<sca> GSM 04.11 RP SC address Address-Value field in string
format; BCD numbers (or GSM default alphabet characters) are converted
to characters of the currently selected TE character set (specified by +CSCS
in 3GPP TS 27.007); type of address given by <tosca>
<scts> GSM 03.40 TP-Service-Centre-Time-Stamp in time-string
format (refer <dt>)
<stat> 0 "REC UNREAD" Received unread messages
 1 "REC READ" Received read messages
 2 "STO UNSENT" Stored unsent messages
 3 "STO SENT" Stored sent messages
 4 "ALL" All messages
<toda> GSM 04.11 TP-Destination-Address Type-of-Address octet
in integer format (when first character of <da> is + (IRA 43) default is 145,
otherwise default is 129) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 120 2015-08-03
<tooa> GSM 04.11 TP-Originating-Address Type-of-Address octet
in integer format (default refer<toda>)
<tosca> GSM 04.11 RP SC address Type-of-Address octet in integer
format (default refer <toda>)
<vp> Depending on SMS-SUBMIT <fo> setting: GSM 03.40
TP-Validity-Period either in integer format (default 167) or in time-string
format (refer <dt>)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s
Reference
3GPP TS 27.005
Note
4.2.5 AT+CMGS Send SMS Message
AT+CMGS Send SMS Message
Test Command
AT+CMGS=?
Response
OK
Parameters
<da> GSM 03.40 TP-Destination-Address Address-Value field in
string format(string should be included in quotation marks); BCD numbers
(or GSM default alphabet characters) are converted to characters of the
currently selected TE character set (specified by +CSCS in 3GPP TS
27.007); type of address given by <toda>
<toda> GSM 04.11 TP-Destination-Address Type-of-Address octet
in integer format (when first character of <da> is + (IRA 43) default is 145,
otherwise default is 129)
<length> Integer type value (not exceed 160 bytes) indicating in the
text mode (+CMGF=1) the length of the message body <data> (or
<cdata>) in characters; or in PDU mode (+CMGF=0), the length of the
actual TP data unit in octets (i.e. the RP layer SMSC address octets are not
counted in the length)
Write Command
1) If text mode
(+CMGF=1):
+CMGS=<da>[,
<toda>]
<CR>text is
entered
<ctrl-Z/ESC>
ESC quits without
sending
2) If PDU mode
(+CMGF=0):
+CMGS=<length
>
<CR>PDU is
given
<ctrl-Z/ESC>
Response
TA sends message from a TE to the network (SMS-SUBMIT). Message
reference value <mr> is returned to the TE on successful message delivery.
Optionally (when +CSMS <service> value is 1 and network supports)
<scts> is returned. Values can be used to identify message upon unsolicited
delivery status report result code.
1) If text mode(+CMGF=1) and sending successful:
+CMGS: <mr>
OK
2) If PDU mode(+CMGF=0) and sending successful: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 121 2015-08-03
+CMGS: <mr>
OK
3)If error is related to ME functionality:
+CMS ERROR: <err>
Parameter
<mr> GSM 03.40 TP-Message-Reference in integer format
Parameter Saving
Mode
NO_SAVE
Max Response
Time
60s
Reference
3GPP TS 27.005
Note
 In text mode, the maximum length of an SMS depends on the used
coding scheme: It is 1024 characters if the 7 bit GSM coding scheme is
used.
 Reject incoming call when sending messages.
4.2.6 AT+CMGW Write SMS Message to Memory
AT+CMGW Write SMS Message to Memory
Test Command
AT+CMGW=?
Response
OK
Response
TA transmits SMS message (either SMS-DELIVER or SMS-SUBMIT)
from TE to memory storage <mem2>. Memory location <index> of the
stored message is returned. By default message status will be set to 'stored
unsent', but parameter <stat> allows also other status values to be given.
If writing is successful:
+CMGW: <index>
OK
If error is related to ME functionality:
+CMS ERROR: <err>
Write Command
1) If text mode
(+CMGF=1):
AT+CMGW=<o
a/da>[,<tooa/tod
a>][,<stat>]
<CR> text is
entered
<ctrl-Z/ESC>
<ESC> quits
without sending
2) If PDU mode
(+CMGF=0):
AT+CMGW=<le
ngth>[,<stat>]
<CR>PDU is
given
<ctrl-Z/ESC>
Parameters
<oa> GSM 03.40 TP-Originating-Address Address-Value field in
string format(string should be included in quotation marks); BCD numbers
(or GSM default alphabet characters) are converted to characters of the
currently selected TE character set (specified by +CSCS in 3GPP TS
27.007);type of address given by <tooa>
<da> GSM 03.40 TP-Destination-Address Address-Value field in
string format(string should be included in quotation marks); BCD numbers
(or GSM default alphabet characters) are converted to characters of the
currently selected TE character set (specified by +CSCS in 3GPP TS 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 122 2015-08-03
27.007); type of address given by <toda>
<tooa> GSM 04.11 TP-Originating-Address Type-of-Address octet
in integer format (default refer <toda>)
<toda> GSM 04.11 TP-Destination-Address Type-of-Address octet in
integer format (when first character of <da> is + (IRA 43) default is 145,
otherwise default is 129)
129 Unknown type(IDSN format number)
161 National number type(IDSN format)
145 International number type(ISDN format)
177 Network specific number(ISDN format)
<length> Integer type value (not exceed 160 bytes) indicating in the
text mode (+CMGF=1) the length of the message body <data> (or
<cdata>) in characters;
or in PDU mode (+CMGF=0), the length of the actual TP
data unit in octets (i.e. the RP layer SMSC address octets are
not counted in the length)
<stat> in the text mode (+CMGF=1):
 "STO UNSENT" Stored unsent messages
 "STO SENT" Stored sent messages
 in PDU mode (+CMGF=0):
 0 Received unread messages
 1 Received read messages
 2 Stored unsent messages
 3 Stored sent messages
<pdu> In the case of SMS: GSM 04.11 SC address followed by
GSM 03.40 TPDU in hexadecimal format: ME/TA converts each octet of
TP data unit into two IRA character long hexadecimal number (e.g. octet
with integer value 42 is presented to TE as two characters 2A (IRA 50 and
65)). In the case of CBS: GSM 03.41 TPDU in hexadecimal format.
<index> Index of message in selected storage <mem2>
Execution
Command
AT+CMGW
Response
TA transmits SMS message (either SMS-DELIVER or SMS-SUBMIT)
from TE to memory storage <mem2>. Memory location <index> of the
stored message is returned. By default message status will be set to 'stored
unsent', but parameter <stat> allows also other status values to be given.
If writing is successful:
+CMGW: <index>
OK
If error is related to ME functionality:
+CMS ERROR: <err>
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 123 2015-08-03
Max Response
Time
5s
Reference
3GPP TS 27.005
Note
4.2.7 AT+CMSS Send SMS Message from Storage
AT+CMSS Send SMS Message from Storage
Test Command
AT+CMSS=?
Response
OK
Response
TA sends message with location value <index> from message storage
<mem2> to the network (SMS-SUBMIT). If new recipient address <da> is
given, it shall be used instead of the one stored with the message. Reference
value <mr> is returned to the TE on successful message delivery. Values can
be used to identify message upon unsolicited delivery status report result
code.
1) If text mode(+CMGF=1) and sending successful:
+CMSS: <mr>
OK
2) If PDU mode(+CMGF=0) and sending successful:
+CMSS: <mr>
OK
3)If error is related to ME functionality:
+CMS ERROR: <err>
Write Command
AT+CMSS=<ind
ex>[,<da>,<toda
>]
Parameters
<index> Integer type; value in the range of location numbers supported
by the associated memory
<da> GSM 03.40 TP-Destination-Address Address-Value field in
string format(string should be included in quotation marks); BCD numbers
(or GSM default alphabet characters) are converted to characters of the
currently selected TE character set (specified by +CSCS in 3GPP TS
27.007); type of address given by <toda>
<toda> GSM 04.11 TP-Destination-Address Type-of-Address octet
in integer format (when first character of <da> is + (IRA 43) default is 145,
otherwise default is 129)
<mr> GSM 03.40 TP-Message-Reference in integer format
Parameter Saving
Mode
NO_SAVE
Max Response
Time
60s
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 124 2015-08-03
3GPP TS 27.005
4.2.8 AT+CNMI New SMS Message Indications
AT+CNMI New SMS Message Indications
Response
+CNMI: (list of supported <mode>s),(list of supported <mt>s),(list of
supported <bm>s),(list of supported <ds>s),(list of supported <bfr>s)
OK
Test Command
AT+CNMI=?
Parameters
See Write Command
Response
+CNMI: <mode>,<mt>,<bm>,<ds>,<bfr>
OK
Read Command
AT+CNMI?
Parameters
See Write Command
Response
TA selects the procedure for how the receiving of new messages from the
network is indicated to the TE when TE is active, e.g. DTR signal is ON. If
TE is inactive (e.g. DTR signal is OFF), message receiving should be done
as specified in GSM 03.38.
OK
ERROR
Write Command
AT+CNMI=<mo
de>[,<mt>[,<bm
>[,<ds>[,<bfr>]]]
]
Parameters
<mode> 0 Buffer unsolicited result codes in the TA. If TA result
code buffer is full, indications can be buffered in some other place or the
oldest indications may be discarded and replaced with the new received
indications.
 1 Discard indication and reject new received message
unsolicited result codes when TA-TE link is reserved (e.g. in on-line data
mode). Otherwise forward them directly to the TE.
 2 Buffer unsolicited result codes in the TA when TA-TE
link is reserved (e.g. in on-line data mode) and flush them to the TE after
reservation. Otherwise forward them directly to the TE.
 3 Forward unsolicited result codes directly to the TE.
TA-TE link specific inband technique used to embed result codes and data
when TA is in on-line data mode.
<mt> (the rules for storing received SMs depend on its data coding
scheme (refer GSM 03.38 [2]), preferred memory storage (+CPMS) setting
and this value):
 0 No SMS-DELIVER indications are routed to the TE. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 125 2015-08-03
 1 If SMS-DELIVER is stored into ME/TA, indication of
the memory location is routed to the TE using unsolicited result code:
+CMTI: <mem>,<index>
 2 SMS-DELIVERs (except class 2) are routed directly to
the TE using unsolicited result code: +CMT:
[<alpha>],<length><CR><LF><pdu> (PDU mode enabled) or +CMT:
<oa>,[<alpha>],<scts>
[,<tooa>,<fo>,<pid>,<dcs>,<sca>,<tosca>,<length>]<CR><LF><data>
(text mode enabled; about parameters in italics, refer Command Show Text
Mode Parameters +CSDH). Class 2 messages result in indication as defined
in <mt>=1.
3 Class 3 SMS-DELIVERs are routed directly to TE
using unsolicited result codes defined in <mt>=2. Messages of other classes
result in indication as defined in <mt>=1.
<bm> (the rules for storing received CBMs depend on its data
coding scheme (refer GSM 03.38 [2]), the setting of Select CBM Types
(+CSCB) and this value):
 0 No CBM indications are routed to the TE.
 2 New CBMs are routed directly to the TE using
unsolicited result code: +CBM: <length><CR><LF><pdu> (PDU mode
enabled) or +CBM: <sn>,<mid>,<dcs>,<page>,<pages><CR><LF><data>
(text mode enabled).
<ds> 0 No SMS-STATUS-REPORTs are routed to the TE.
 1 SMS-STATUS-REPORTs are routed to the TE using
unsolicited result code: +CDS:<length><CR><LF><pdu> (PDU mode
enabled) or +CDS: <fo>,<mr>[,<ra>][,<tora>],<scts>,<dt>,<st> (text mode
enabled)
<bfr> 0 TA buffer of unsolicited result codes defined within this
Command is flushed to the TE when <mode> 1...3 is entered (OK response
shall be given before flushing the codes).
 1 TA buffer of unsolicited result codes defined within this
command is cleared when <mode> 1…3 is entered
Unsolicited result code
1. Indicates that new message has been received
If <mt>=1:
+CMTI: <mem3>, <index>
If <mt>=2 (PDU mode enabled):
+CMT: [<alpha>],<length><CR><LF><pdu>
If <mt>=2 (text mode enabled):
+CMT: <oa>, <scts>[, <tooa>, <fo>, <pid>, <dcs>, <sca>, <tosca>,
<length>]<CR><LF><data>
2. Indicates that new cell broadcast message has been received
If <bm>=2 (PDU mode enabled): 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 126 2015-08-03
+CBM: <length><CR><LF><pdu>
If <bm>=2 (text mode enabled):
+CBM: <sn>, <mid>, <dcs>, <page>, <pages><CR><LF><data>
3. Indicates that new SMS status report has been received
If <ds>=1 (PDU mode enabled):
+CDS: <length><CR><LF><pdu>
If <ds>=1 (text mode enabled):
+CDS: <fo>, <mr>[, <ra>][, <tora>], <scts>, <dt>, <st>
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference
3GPP TS 27.005
Note
4.2.9 AT+CPMS Preferred SMS Message Storage
AT+CPMS Preferred SMS Message Storage
Response
+CPMS: (list of supported <mem1>s),(list of supported <mem2>s),(list of
supported <mem3>s)
OK
Test Command
AT+CPMS=?
Parameters
See Write Command
Response
+CPMS: <mem1>,<used1>,<total1>,<mem2>,<used2>,<total2>,
<mem3>,<used3>,<total3>
OK
ERROR
Read Command
AT+CPMS?
Parameters
See Write Command
Response
TA selects memory storages <mem1>, <mem2> and <mem3> to be used for
reading, writing, etc.
+CPMS: <used1>,<total1>,<used2>,<total2>,<used3>,<total3>
OK
ERROR
Write Command
AT+CPMS=<me
m1>[,<mem2>[,<
mem3>]]
Parameters
<mem1> Messages to be read and deleted from this memory storage 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 127 2015-08-03
 "SM" SIM message storage
 "ME" Phone message storage
 "SM_P" SM message storage preferred
 "ME_P" ME message storage preferred
 "MT" SM or ME message storage ( SM preferred)
<mem2> Messages will be written and sent to this memory storage
 "SM" SIM message storage
 "ME" Phone message storage
 "SM_P" SM message storage preferred
 "ME_P" ME message storage preferred
 "MT" SM or ME message storage ( SM preferred)
<mem3> Received messages will be placed in this memory storage if
routing to PC is not set ("+CNMI")
 "SM" SIM message storage
 "ME" Phone message storage
 "SM_P" SM message storage preferred
 "ME_P" ME message storage preferred
 "MT" SM or ME message storage ( SM preferred)
<usedx> Integer type; Number of messages currently in <memx>
<totalx> Integer type; Number of messages storable in <memx>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
3GPP TS 27.005
Note
4.2.10 AT+CRES Restore SMS Settings
AT+CRES Restore SMS Settings
Response
+CRES: (list of supported <profile>s)

OK
Test Command
AT+CRES=?
Parameter
See Write Command
Write Command
AT+CRES=<pro
file>
Response
Execution command restores message service settings from non-volatile
memory to active memory. A TA can contain several profiles of settings.
Settings specified in commands Service Centre Address +CSCA and Set
Message Parameters +CSMP are restored. Certain settings may not be
supported by the storage (e.g. (U)SIM SMS parameters) and therefore can
not be restored.
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 128 2015-08-03
ERROR
Parameter
<profile> 0 Restore SM service settings from profile 0
1 Restore SM service settings from profile 1
2 Restore SM service settings from profile 2
3 Restore SM service settings from profile 3
Execution
Command
AT+CRES
Response
Same as AT+CRES=0.
OK
If error is related to ME functionality:
+CMS ERROR <err>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s
Reference
3GPP TS 27.005
Note
4.2.11 AT+CSAS Save SMS Settings
AT+CSAS Save SMS Settings
Response
+CSAS: (list of supported <profile>s)
OK
Test Command
AT+CSAS=?
Parameter
See Write Command
Response
Execution command saves active message service settings to a non-volatile
memory. Settings specified in commands Service Centre Address +CSCA
and Set Message Parameters +CSMP are saved. Certain settings may not be
supported by the storage (e.g. (U)SIM SMS parameters) and therefore can
not be saved.
OK
ERROR
Write Command
AT+CSAS=<prof
ile>
Parameter
<profile> 0 Save SM service setting in profile 0
1 Save SM service setting in profile 1
2 Save SM service setting in profile 2
3 Save SM service setting in profile 3
Execution
Command
AT+CSAS
Response
Same as AT+CSAS=0
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 129 2015-08-03
If error is related to ME functionality:
+CMS ERROR <err>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s
Reference
3GPP TS 27.005
Note
4.2.12 AT+CSCA SMS Service Center Address
AT+CSCA SMS Service Center Address
Test Command
AT+CSCA=?
Response
OK
Response
+CSCA: <sca>,<tosca>[,<scaAlpha>]
OK
Read Command
AT+CSCA?
Parameters
See Write Command
Response
TA updates the SMSC address, through which mobile originated SMS are
transmitted. In text mode, setting is used by send and writes commands. In
PDU mode, setting is used by the same commands, but only when the
length of the SMSC address coded into <pdu> parameter equals zero.

Note: The Command writes the parameters in NON-VOLATILE memory.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CSCA=<sca
>[,<tosca>]
Parameters
<sca> GSM 04.11 RP SC address Address-Value field in string
format(string should be included in quotation marks); BCD numbers (or
GSM default alphabet characters) are converted to characters of the
currently selected TE character set (specified by +CSCS in 3GPP TS
27.007); type of address given by <tosca>
<tosca> Service center address format GSM 04.11 RP SC address
Type-of-Address octet in integer format (default refer <toda>)
<scaAlpha> String type(string should be included in quotation
marks)
 Service center address alpha data
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 130 2015-08-03
Mode
Max Response
Time
5s
Reference
3GPP TS 27.005
Note
4.2.13 AT+CSCB Select Cell Broadcast SMS Messages
AT+CSCB Select Cell Broadcast SMS Messages
Response
+CSCB: (list of supported <mode>s)
OK
Test Command
AT+CSCB=?
Parameter
See Write Command
Response
+CSCB: <mode>,<mids>,<dcss>
OK
Read Command
AT+CSCB?
Parameters
See Write Command
Response
TA selects which types of CBMs are to be received by the ME.

Note: The Command writes the parameters in NON-VOLATILE memory.
OK
If error is related to ME functionality:
+CMS ERROR: <err>
Write Command
AT+CSCB=<mo
de>[,<mids>[,<d
css>]]
Parameters
<mode> 0 Message types specified in <mids> and <dcss> are
accepted
 1 Message types specified in <mids> and <dcss> are not
accepted.
<mids> String type (string should be included in quotation marks); all
different possible combinations of CBM message identifiers (refer <mid>)
(default is empty string); e.g. "0,1,5,320,922". Total 15 different <mids>
values can be supported. <mids> values cannot be written consecutively,
such as "100-200"
<dcss> String type(string should be included in quotation marks); all
different possible combinations of CBM data coding schemes (refer <dcs>)
(default is empty string); e.g. "0,5". Total 5 different <dcss> values can be
supported. <dcss> values cannot be written consecutively, such as "0-5".
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 131 2015-08-03
Mode
Max Response
Time
-
Reference
3GPP TS 27.005
Note
AT+CSCB=0 will reset <mids> and <dcss> and select no <mids> and no
<dcss>.
AT+CSCB=1 means all <dcss> are accepted but this command has no effect
on the list of the <mids> accepted. "0-255" means all <dcss> are accepted.
AT+CSCB=0, <mids> will add the <mids> values in the <mids> current list
handled by module.
AT+CSCB=0, <dcss> will add the <dcss> values in the <dcss> current list
handled by module.
If AT+CSCB=0, <mids> is received while the list of <mids> is full, OK is
returned and new value is not added.
4.2.14 AT+CSDH Show SMS Text Mode Parameters
AT+CSDH Show SMS Text Mode Parameters
Response
+CSDH: (list of supported <show>s)
OK
Test Command
AT+CSDH=?
Parameter
See Write Command
Response
+CSDH: <show>
OK
Read Command
AT+CSDH?
Parameter
See Write Command
Response
TA determines whether detailed header information is shown in text mode
result codes.
OK
Write Command
AT+CSDH=[<sh
ow>]
Parameter
<show> 0 Do not show header values defined in commands +CSCA
and +CSMP (<sca>, <tosca>, <fo>, <vp>, <pid> and <dcs>) nor <length>,
<toda> or <tooa> in +CMT, +CMGL, +CMGR result codes for
SMS-DELIVERs and SMS-SUBMITs in text mode
 1 Show the values in result codes
Parameter Saving
Mode
NO_SAVE
Max Response - 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 132 2015-08-03
Time
Reference
3GPP TS 27.005
Note
4.2.15 AT+CSMP Set SMS Text Mode Parameters
AT+CSMP Set SMS Text Mode Parameters
Response
+CSMP: (list of supported <fo>s),(list of supported <vp>s),(list of
supported <pid>s),(list of supported <dcs>s)
OK
Test Command
AT+CSMP=?
Parameters
See Write Command
Response
+CSMP: <fo>,<vp>,<pid>,<dcs>
OK
Read Command
AT+CSMP?
Parameters
See Write Command
Response
TA selects values for additional parameters needed when SM is sent to the
network or placed in a storage when text mode is selected (+CMGF=1). It is
possible to set the validity period starting from when the SM is received by
the SMSC (<vp> is in range 0... 255) or define the absolute time of the
validity period termination (<vp> is a string).
Note: The Command writes the parameters in NON-VOLATILE memory.
OK
Write Command
AT+CSMP=[<fo
>[,<vp>,<pid>,<
dcs>]]
Parameters
<fo> Depending on the command or result code: first octet of GSM
03.40 SMS-DELIVER, SMS-SUBMIT (default 17),
SMS-STATUS-REPORT, or SMS-COMMAND (default 2) in integer
format. SMS status report is supported under text mode if <fo> is set to 49.
<vp> Depending on SMS-SUBMIT <fo> setting: GSM 03.40
TP-Validity-Period either in integer format (default 167) or in time-string
format (refer <dt>)
<pid> GSM 03.40 TP-Protocol-Identifier in integer format (default 0).
<dcs> GSM 03.38 SMS Data Coding Scheme in Integer format.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 133 2015-08-03
Reference
3GPP TS 27.005
Note
4.2.16 AT+CSMS Select Message Service
AT+CSMS Select Message Service
Response
+CSMS: (list of supported <service>s)
OK
Test Command
AT+CSMS=?
Parameter
See Write Command
Response
+CSMS: <service>,<mt>,<mo>,<bm>
OK
Read Command
AT+CSMS?
Parameters
See Write Command
Response
+CSMS: <mt>,<mo>,<bm>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CSMS=<ser
vice>
Parameters
<service> 0 GSM 03.40 and 03.41 (the syntax of SMS AT commands
is compatible with 3GPP TS 27.005 Phase 2 version 4.7.0; Phase 2+
features which do not require new Command syntax may be supported (e.g.
correct routing of messages with new Phase 2+ data coding schemes))
1 GSM 03.40 and 03.41 (the syntax of SMS AT
commands is compatible with 3GPP TS 27.005 Phase 2+
version; the requirement of <service> setting 1 is
mentioned under corresponding command descriptions)
<mt> Mobile Terminated Messages:
 0 Type not supported
 1 Type supported
<mo> Mobile Originated Messages:
 0 Type not supported
 1 Type supported
<bm> Broadcast Type Messages:
 0 Type not supported
 1 Type supported
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 134 2015-08-03
Max Response
Time
-
Reference
3GPP TS 27.005
Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 135 2015-08-03
5 AT Commands for SIM Application Toolkit
5.1 Overview
Command Description
AT+STKTRS This command is used to send STK terminal response
AT+STKENVS This command is used to send STK envelope command
AT+STKCALL Trigger STK call
AT+STKSMS Trigger STK SMS
AT+STKSS Trigger STK SS
AT+STKUSSD Trigger STK USSD
AT+STKDTMF Trigger STK DTMF
+STKPCI This unsolicited result code is used to indicate proactive command
Indication.
AT+STKMENU Show STK main menu
AT+STKPCIS Switch STK URC string
5.2 Detailed Descriptions of Commands
5.2.1 AT+STKTRS STK Terminal Response
AT+STKTRS STK Terminal Response.
Response
+STKTRS: <result_length>,<text_length>
OK
Test Command
AT+STKTRS=?
Parameter
See Write Command
Response
OK
Read Command
AT+STKTRS?
Write Command
AT+STKTRS=<re
sult>[,<text>]
Response
OK
ERROR 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 136 2015-08-03
Parameter
<result> HEX String --specified in GSM11.14[12.12]
- '00' = Command performed successfully;
- '10' = Proactive SIM session terminated by the user;
- '11' = Backward move in the proactive SIM session requested by
the user;
…
- '2000' = ME currently unable to process command, No specific
cause can be given;
- '2001' = ME currently unable to process command, Screen is
busy;
…
<text> Hex String
If response to GET INPUT or GET INKEY --specified in
GSM11.14[12.15]
-text string, the first 2 char is Data coding scheme
If response to SELECT ITEM --specified in GSM11.134[12.10]
 -Identifier of item chosen
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
For more detail used, can refer AT+STKTR command
5.2.2 AT+STKENVS STK Envelope Command
AT+STKENVS STK Envelope Command
Response
+STKENVS: <command_length>,<data_length>
OK
Test Command
AT+STKENVS=?
Parameter
See Write Command
Response
OK
Read Command
AT+STKENVS?
Parameter
See Write Command
Write Command
AT+STKENVS=<
command>[,<data
Response
OK
ERROR 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 137 2015-08-03
>] Parameter
<command> HEX String --specified in GSM11.14[13.1]
- 'D3' = Menu Selection;
- 'D6' =Event download;
<data> Hex String
If command is ‘D3’ --specified in GSM11.14[8.2]
-Item identifier of main menu
If command is ‘D6’ --specified in GSM11.14[11]
 -event list
- '04' = User activity
- '05' = Idle screen available
- '07' = Language selection
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
For more detail used, can refer AT+STKENV command
5.2.3 AT+STKCALL STK call setup
AT+STKCALL STK call setup
Response
OK
Test Command
AT+STKCALL=?
Parameter
See Write Command
Write Command
AT+STKCALL=<
command>
Response
OK
ERROR
Parameter
<command> stk call command
0 Trigger modem to send STK CALLSETUP
4 Trigger modem to send STK CALLSETUP but icon cannot
be displayed
16 Proactive session terminated by user
18 No response from user
32 ME currently unable to process this command
34 User reject setup call
50 Command data not understood by ME
Note: Above are the possible terminal response value needed to be
responded by application. It’s modem’s responsibility to response for other
terminal response value.
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 138 2015-08-03
Max Response Time -
Reference Note
According to spec 11.14, 0x12 ("No response from user") is not a possible
terminal response value for STK CALLSETUP. So we will translate
0x12("No response from user") to 0x20 ("ME currently unable to process
this command").
5.2.4 AT+STKSMS STK SMS delivery
AT+STKSMS STK SMS delivery
Response
OK
Test Command
AT+STKSMS=?
Parameter
See Write Command
Write Command
AT+STKSMS=<co
mmand>
Response
OK
ERROR
Parameter
<command> stk sms command
0 Trigger modem to send STK SMS
4 Trigger modem to send STK SMS but icon cannot be
displayed
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
Above are the possible terminal response value needed to be responded by
application. It’s modem’s responsibility to response for other terminal
response value
5.2.5 AT+STKSS STK SS setup
AT+STKSS STK SS setup
Response
OK
Test Command
AT+STKSS=?
Parameter
See Write Command
Write Command
AT+STKSS=<com
mand>
Response
OK
ERROR
Parameter
<command> stk ss command
0 Trigger modem to send STK SS
4 Trigger modem to send STK SS but icon cannot be 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 139 2015-08-03
displayed
50 Command data not understood by ME
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
Above are the possible terminal response value needed to be responded by
application. It’s modem’s responsibility to response for other terminal
response value.
5.2.6 AT+STKUSSD STK USSD setup
AT+STKUSSD STK USSD setup
Response
OK
Test Command
AT+STKUSSD=?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+STKUSSD=<c
ommand>
Parameters
<command> STK ss command
0 Trigger modem to send STK USSD
4 Trigger modem to send STK USSD but icon cannot be
displayed
50 Command data not understood by ME
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
Above are the possible terminal response value needed to be responded by
application.It’s modem’s responsibility to response for other terminal
response value.
5.2.7 AT+STKDTMF STK sending DTMF
AT+STKDTMF STK sending DTMF
Response
OK
Test Command
AT+STKDTMF=?
Parameters
See Write Command
Write Command
AT+STKDTMF=<
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 140 2015-08-03
command> ERROR
Parameters
<command> STK DTMF command
0 Trigger modem to send STK DTMF
4 Trigger modem to send STK DTMF but icon cannot be
displayed
32 ME currently unable to process command
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
Above are the possible terminal response value needed to be responded by
application.It’s modem’s responsibility to response for other terminal
response value.
5.2.8 +STKPCI STK Proactive Command Indication
+STKPCI STK Proactive Command Indication
+STKPCI: <pci_type>[,<proactive_command>,…]
Parameter
<pci_type>
-0 The SAT command is handled by TE.
-1 The SAT command is handled by ME.
-2 No other command (end of session)
<proactive command>
-DISPLAY TEXT,<Command Qualifier>,<text string>
-GET INKEY, <Command Qualifier>,<text string>
-GET INPUT, <Command Qualifier>,<text string>,<Min length>,<Max
length>
-PLAY TONE,<alpha id>,<tone>,<Time unit>,<Time interval>
-SET UP MENU,<the number of item>,<alpha id>
-SELECT ITEM, <the number of item>,<alpha id>
-ITEM,<index>,<id>,<item string>
-SEND SHORT MESSAGE,<alpha id>,<addr>,<sms tpdu>
-SEND SS,<alpha id>,<ss string>
-SEND USSD,<alpha id>,<ussd string>
-SETUP CALL,<alpha id>,<addr>
-SET UP IDLE MODE TEXT,<text string>
-SEND DTMF,<alpha id>,<dtmf string>.
If <alpha id> = 0, the alpha id is null
If <addr> = 0, the addr is null
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 141 2015-08-03
Max Response
Time
-
Reference Note
For detail introduction, please refer to SIM800 Series_STK_Application Note.doc.
5.2.9 AT+STKMENU STK Main menu command
AT+STKMENU STK Main menu command
Response
OK
Test Command
AT+STKMENU
=? Parameters
See Read Command
Response
[+STKMENU:<index>,<id>,<text>]
[+STKMENU:<index>,<id>,<text>]
[+STKMENU:<index>,<id>,<text>]
[…]
OK
Read Command
AT+STKMENU
?
Parameters
<index> The menu’s index, begin 1
<id> The item identifier
<text> The content of item, code by EFADN
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
When stkpci is off, read command response will null.
5.2.10 AT+STKPCIS STK URC switch command
AT+STKPCIS STK URC switch command
Response
+STKPCIS: (0-1)
OK
Test Command
AT+STKPCIS=?
Parameters
See Write Command
Read Command
AT+STKPCIS?
Response
+STKPCIS: <switch>
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 142 2015-08-03
Parameters
Response
OK
ERROR
Write Command
AT+STKPCIS=<
switch>
Parameters
<switch> the switch of STK URC
-0 The STK URC is off
-1 The STK URC is ON
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 143 2015-08-03
6 AT Commands Special for SIMCom
6.1 Overview
Command Description
AT+SIDET Change the side tone gain level
AT+CPOWD Power off
AT+SPIC Times remained to input SIM PIN/PUK
AT+CMIC Change the microphone gain level
AT+CALA Set alarm time
AT+CALD Delete alarm
AT+CADC Read ADC
AT+CSNS Single numbering scheme
AT+CDSCB Reset cell broadcast
AT+CMOD Configure alternating mode calls
AT+CFGRI Indicate RI when using URC
AT+CLTS Get local timestamp
AT+CLDTMF Local DTMF tone generation
AT+CDRIND CS voice/data call termination indication
AT+CSPN Get service provider name from SIM
AT+CCVM Get and set the voice mail number on the SIM
AT+CBAND Get and set mobile operation band
AT+CHF Configure hands free operation
AT+CHFA Swap the audio channels
AT+CSCLK Configure slow clock
AT+CENG Switch on or off engineering mode
AT+SCLASS0 Store class 0 SMS to SIM when received class 0 SMS
AT+CCID Show ICCID
AT+CMTE Set critical temperature operating mode or query temperature
AT+CMGDA Delete all SMS
AT+STTONE Play SIM toolkit tone
AT+SIMTONE Generate specific tone
AT+CCPD Enable or disable alpha string
AT+CGID Get SIM card group identifier
AT+MORING Show state of mobile originated call
AT+CMGHEX Enable or disable sending non-ascii character SMS
AT+CCODE Configure SMS code mode
AT+CIURC Enable or disable initial URC presentation 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 144 2015-08-03
AT+CPSPWD Change PS super password
AT+EXUNSOL Enable or disable proprietary unsolicited indications
AT+CGMSCLASS Change GPRS multislot class
AT+CDEVICE View current flash device type
AT+CCALR Call ready query
AT+GSV Display product identification information
AT+SGPIO Control the GPIO
AT+SPWM Generate the pulse-width-modulation
AT+ECHO Echo cancellation control
AT+CAAS Control auto audio switch
AT+SVR Configure voice coding type for voice calls
AT+GSMBUSY Reject incoming call
AT+CEMNL Set the list of emergency number
AT*CELLLOCK Set the list of ARFCN which needs to be locked
AT+SLEDS Set the timer period of net light
AT+CBUZZERRING Use the buzzer sound as the incoming call ring
AT+CEXTERNTONE Close or open the microphone
AT+CNETLIGHT Close the net light or open it to shining
AT+CWHITELIST Set the white list
AT+CSDT Switch on or off detecting SIM card
AT+CSMINS SIM inserted status reporting
AT+CSGS Netlight indication of GPRS status
AT+CMICBIAS Close or open the MICBIAS
AT+DTAM Set TTS and record play mode in call
AT+SJDR Set jamming detection fuction
AT+CPCMCFG Set PCM parameter
AT+CPCMSYNC Set PCM sync parameter
AT+CANT Antenna detecting
AT+CAGCSET Close or open AGC function
AT+SD2PCM SD and PCM switch function
AT+SKPD Keypad detecting function
AT+SIMTONEX Custom tones
AT+CROAMING Roaming state
AT+CNETSCAN Performing a net survey to show all the cells’ information
AT+CMNRP Dual serial port feature
AT+CEGPRS Switch on or off EDGE
AT+CGPIO Control the GPIO by PIN index
AT+CMEDPLAY Play audio file 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 145 2015-08-03
AT+CMEDIAVOL Control the volume when playing audio file
AT+SNDLEVEL Set the sound level of special AT command
AT+ECHARGE Charge control
AT+SIMTIMER Modify the poll interval time requested by SIM card
AT+SPE Speech enhancement control
AT+CCONCINDEX Report concatenated SMS index
AT+SDMODE SD and PCM switch function
AT+SRSPT Control SMS retransmission
6.2 Detailed Descriptions of Commands
6.2.1 AT+SIDET Change the Side Tone Gain Level
AT+SIDET Change the Side Tone Gain Level
Response
+SIDET: (list of supported <channel>s),(list of supported <gainlevel>s)
OK
Test Command
AT+SIDET=?
Parameters
See Write Command
Response
+SIDET: (<channel0>,<gainlevel0>),…, (<channeln>,<gainleveln>)
OK
Read Command
AT+SIDET?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SIDET=<ch
annel>,<gainleve
l> Parameters
<channel> 0 Main audio channel
1 Aux audio channel
2 Main audio channel hand free mode
3 Aux audio channel hand free mode
<gainlevel> Int: 0-16
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
 <gainleveln> value of read command is related to <channel> specific.
 Scope of parameter <channel> is different among SIM800 series 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 146 2015-08-03
project, please refer to chapter 21 for details.
6.2.2 AT+CPOWD Power off
AT+CPOWD Power Off
Response
[NORMAL POWER DOWN]
Write Command
AT+CPOWD=<n
> Parameter
<n> 0 Power off urgently (Will not send out NORMAL POWER
DOWN)
 1 Normal power off (Will send out NORMAL POWER
DOWN)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.3 AT+SPIC Times Remained to Input SIM PIN/PUK
AT+SPIC Times Remained to Input SIM PIN/PUK
Response
Times remained to input SIM PIN
+SPIC: <pin1>,<pin2>,<puk1>,<puk2>
OK
Execution
Command
AT+SPIC
Parameters
<pin1> Times remained to input chv1
<pin2> Times remained to input chv2
<puk1> Times remained to input puk1
<puk2> Times remained to input puk2
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.4 AT+CMIC Change the Microphone Gain Level
AT+CMIC Change the Microphone Gain Level
Test Command
AT+CMIC=?
Response
+CMIC: (list of supported <channel>s),(list of supported <gainlevel>s)
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 147 2015-08-03
OK
Parameters
See Write Command
Response
+CMIC: (<channel0>,<gainlevel0>),…,(<channeln>,<gainleveln>)
OK
Read Command
AT+CMIC?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CMIC=<cha
nnel>,<gainlevel
> Parameters
<channel> 0 Main audio channel
1 Aux audio channel
2 Main audio channel hand free mode
3 Aux audio channel hand free mode
<gainlevel> Int: 0 – 15
0 0dB
1 +1.5dB
2 +3.0 dB
3 +4.5 dB
4 +6.0 dB
5 +7.5 dB
6 +9.0 dB
7 +10.5 dB
8 +12.0 dB
9 +13.5 dB
10 +15.0 dB
11 +16.5 dB
12 +18.0 dB
13 +19.5 dB
14 +21.0 dB
15 +22.5 dB
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
 <gainleveln> value is related to <channel> specific.
 The default gain level of main audio channel is 10.
 Scope of parameter <channel> is different among SIM800 series 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 148 2015-08-03
project, please refer to chapter 21 for details.
6.2.5 AT+CALA Set Alarm Time
AT+CALA Set Alarm Time
Response
+CALA: ("yy/mm/dd,hh:mm:ss","hh:mm:ss"),(1-5),(0-7)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+CALA=?
Parameters
See Write Command
Response
[+CALA: <time>,<n1>[,<recurr>]
[<CR><LF> +CALA: <time>,<n2>[,<recurr>] …]]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CALA?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
Indicate expired alarm.
ALARM RING
+CALV: <n>
Write Command
AT+CALA=<ti
me>[,<n>[,<rec
urr>]]
Parameters
<time> A string parameter(string should be included in quotation marks)
which indicates the time when alarm arrives. The format is
"yy/MM/dd,hh:mm:ss" where characters indicate the last two digits of year,
month, day, hour, minute, second.
<n> Index of the alarm (range 1 to 5 for now).
<recurr> "0", "1"---"7" String type value indicating day of week for the
alarm in one of the following formats:
"<1..7>[,<1..7>[…]]" – Set a recurrent alarm for one or more
days in the week. The digits 1 to 7 correspond to the days in the
week, Monday (1), …, Sunday (7).
Example: The string "1,2,3,4,5" may be used to set an alarm for
all weekdays.
"0" – Set a recurrent alarm for all days in the week. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 149 2015-08-03
Parameter
Saving Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
If user sets recurr function, the string of <time> should not enter "yy/MM/dd",
for example: set Monday to Friday alarm at the time of 16PM of alarm 2.
AT+CALA="16:00:00",2,1,2,3,4,5
6.2.6 AT+CALD Delete Alarm
AT+CALD Delete Alarm
Response
+CALD: (list of supported <n>s)
OK
Test Command
AT+CALD=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CALD=<n>
Parameters
<n> Integer type value indicating the index of the alarm; default vaule is
manufacturer specific (range from 1 to 5 now).
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.7 AT+CADC Read ADC
AT+CADC Read ADC
Response
+CADC: (list of supported <status>s),(list of supported <value>s)
OK
Test Command
AT+CADC=?
Parameters
<status> 1 Success
 0 Fail
<value> Integer 0-2800
Read Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 150 2015-08-03
+CADC: <status>,<value>
OK
AT+CADC?
Parameters
See Test Command
Parameter Saving
Mode
NO_SAVE
Max Response
Time
2s
Reference Note
6.2.8 AT+CSNS Single Numbering Scheme
AT+CSNS Single Numbering Scheme
Response
+CSNS: (list of supported <mode>s)
OK
Test Command
AT+CSNS=?
Parameters
See Write Command
Response
+CSNS: <mode>
OK
Read Command
AT+CSNS?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CSNS=<mo
de>
Parameters
<mode>
0 Voice
2 Fax
4 Data
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 151 2015-08-03
6.2.9 AT+CDSCB Reset Cell Broadcast
AT+CDSCB Reset Cell Broadcast
Execution
Command
AT+CDSCB
Response
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Please also refer to AT+CSCB.
6.2.10 AT+CMOD Configure Alternating Mode Calls
AT+CMOD Configure Alternating Mode Calls
Response
+CMOD: (0)
OK
Test Command
AT+CMOD=?
Parameters
See Write Command
Response
+CMOD: <mode>
OK
Read Command
AT+CMOD?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CMOD=[<m
ode>]
Parameters
<mode> 0 Only single mode is supported
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.11 AT+CFGRI Indicate RI When Using URC
AT+CFGRI Indicate RI When Using URC
Test Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 152 2015-08-03
+CFGRI: (0,1)
OK
AT+CFGRI=?
Parameters
See Write Command
Response
+CFGRI: <status>
OK
Read Command
AT+CFGRI?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CFGRI=<st
atus>
Parameters
<status> 0 Off
1 On(TCPIP,FTP and URC control RI PIN)
2 On(only TCPIP control RI PIN)
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
RI PIN can not controlled by "AT+CFGRI" command when module has call
service or receiving SMS.
6.2.12 AT+CLTS Get Local Timestamp
AT+CLTS Get Local Timestamp
Test Command
AT+CLTS=?
Response
+CLTS: "yy/MM/dd,hh:mm:ss+/-zz"
OK
Read Command
AT+CLTS?
Response
+CLTS: <mode>
OK
Response
OK
ERROR
Write Command
AT+CLTS=<mo
de>
Parameters
<mode> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 153 2015-08-03
0 Disable
1 Enable
Unsolicited Result Code
When "get local timestamp" function is enabled, the following URC may
be reported if network sends the message to the MS to provide the MS
with subscriber specific information.
1. Refresh network name by network:
*PSNWID: "<mcc>", "<mnc>", "<full network name>", <full
network name CI>, "<short network name>",<short network name
CI>
2. Refresh time and time zone by network:
This is UTC time, the time queried by AT+CCLK command is local
time.
*PSUTTZ: <year>, <month>, <day>, <hour>, <min>, <sec>, "<time
zone>", <dst>
3. Refresh network time zone by network:
+CTZV: "<time zone>"
4. Refresh Network Daylight Saving Time by network:
DST: <dst>
Parameters
<mcc> String type; mobile country code
<mnc> String type; mobile network code
<full network name> String type; name of the network in full length.
<full network name CI> Integer type; indicates whether to add CI.
0 The MS will not add the initial letters of the Country's
Name to the text string.
1 The MS will add the initial letters of the Country's
Name and a separator (e.g. a space) to the text string.
<short network name> String type; abbreviated name of the network
<short network name CI> Integer type; indicates whether to add CI.
 0 The MS will not add the initial letters of the Country's
Name to the text string.
1 The MS will add the initial letters of the Country's
Name and a separator (e.g. a space) to the text string.
<year> 4 digits of year (from network)
<month> Month (from network)
<day> Day (from network)
<hour> Hour (from network)
<min> Minute (from network)
<sec> Second (from network) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 154 2015-08-03
<time zone> String type; network time zone. If the network time zone
has been adjusted for Daylight Saving Time, the network shall indicate
this by including the <dst> (Network Daylight Saving Time)
<dst> Network Daylight Saving Time; the content of this
indicates the value that used to adjust the network time zone
 0 No adjustment for Daylight Saving Time
 1 +1 hour adjustment for Daylight Saving
 2 +2 hours adjustment for Daylight Saving Time
3 Reserved
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
Support for this Command will be network dependent.
Set AT+CLTS=1, it means user can receive network time updating
and use AT+CCLK to show current time.
6.2.13 AT+CLDTMF Local DTMF Tone Generation
AT+CLDTMF Local DTMF Tone Generation
Test Command
AT+CLDTMF=?
Response
+CLDTMF: (1-100),(0-9,A,B,C,D,E,F,*,#),(10-500)
OK
Response
OK
ERROR
Write Command
AT+CLDTMF=<
n>,<DTMF
string>[<timeBas
e>]
Parameters
<n> A numeric parameter (1-100) which indicates the duration of all
DTMF tones.
<DTMF -string> A string parameter (string should be included in
quotation marks) which has a max length of 20 chars of form <DTMF>,
separated by commas.
<DTMF> A single ASCII chars in the set 0-9, #,*, A-D. In addition,
E and F is supported too. E represents single frequency 1400HZ sound, F
represents single frequency 2300HZ sound.
<timeBase> timeBase to generate DTMF sound.the DTMF on time is
<n>*<timeBase>, DTMF off time is timeBase,the default value is 100ms.
Execution
Command
AT+CLDTMF
Response
OK
Abort any DTMF tone currently being generated and any DTMF tone
sequence.
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 155 2015-08-03
Mode
Max Response
Time
-
Reference Note
Local DTMF tone can be played in call, play mode is controlled by
AT+DTAM.
6.2.14 AT+CDRIND CS Voice/Data Call Termination Indication
AT+CDRIND CS Voice/Data Call Termination Indication
Response
+CDRIND: (list of supported <n>s)
OK
Test Command
AT+CDRIND=?
Parameter
See Write Command
Response
+CDRIND: <n>
OK
Read Command
AT+CDRIND?
Parameter
See Write Command
Response
OK
ERROR
Parameter
<n> A numeric parameter to enable an unsolicited event code indicating
whether a CS voice call, CS data has been terminated.
 0 Disable
1 Enable
Unsolicited result code
When enabled, an unsolicited result code is returned after the connection
has been terminated
+CDRIND: <type>
Write Command
AT+CDRIND=<
n>
Parameter
<type> Connection type
 0 CSV connection
 1 CSD connection
 2 PPP connection
Parameter Saving
Mode
NO_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 156 2015-08-03
Reference Note
6.2.15 AT+CSPN Get Service Provider Name from SIM
AT+CSPN Get Service Provider Name from SIM
Response
+CSPN: <spn>,<display mode>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CSPN?
Parameters
<spn> String type(string should be included in quotation
marks); service provider name on SIM
<display mode> 0 Not display PLMN. Already registered on PLMN
 1 Display PLMN
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
CME errors occur if SIM is not inserted.
6.2.16 AT+CCVM Get and Set the Voice Mail Number on the SIM
AT+CCVM Get and Set the Voice Mail Number on the SIM
Response
+CCVM: maximum length of field <vm number>, maximum length of
field <alpha string>
OK
Test Command
AT+CCVM=?
Parameters
See Write Command
Response
If voice mail number is not set:
OK
If voice mail number is set:
+CCVM: <vm number>[,<alpha string>]
OK
Read Command
AT+CCVM?
Parameters
See Write Command
Write Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 157 2015-08-03
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
AT+CCVM=<vm
number>[,<alpha
string>]
Parameters
<vm number> String type,The voice mail number to write to the SIM
<alpha string> String type,The alpha-string to write to the SIM
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
6.2.17 AT+CBAND Get and Set Mobile Operation Band
AT+CBAND Get and Set Mobile Operation Band
Response
+CBAND: (list of supported <op_band>s)
OK
Test Command
AT+CBAND=?
Parameter
See Write Command
Response
+CBAND: <op_band>[,<ALL_BAND>]
OK
Read Command
AT+CBAND?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CBAND=<o
p_band>
Parameter
<op_band> A string parameter which indicate the operation band.
 And the following strings should be included in quotation
marks.
EGSM_MODE
PGSM_MODE
DCS_MODE
GSM850_MODE
PCS_MODE
EGSM_DCS_MODE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 158 2015-08-03
GSM850_PCS_MODE
EGSM_PCS_MODE
ALL_BAND
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
 Radio settings are stored in non-volatile memory.
 The value of parameter <op_band> is different among SIM800 series
project, please refer to chapter 21 for details.
6.2.18 AT+CHF Configure Hands Free Operation
AT+CHF Configure Hands Free Operation
Response
+CHF: (list of supported <ind>s),(list of supported <state>s)
OK
Test Command
AT+CHF=?
Parameters
See Write Command
Response
+CHF: <ind>,<state>
OK
Read Command
AT+CHF?
Parameters
See Write Command
Response
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
+CHF: <state>
Write Command
AT+CHF=<ind>
[,<state>]
Parameters
<ind> 0 Unsolicited result code disabled
1 Unsolicited result code enabled
(non-volatile)
<state> 0 Main audio channel
1 Aux audio channel
2 Main audio channel hand free mode
3 Aux audio channel hand free mode
4 PCM channel 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 159 2015-08-03
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
This command is related to the actual module, <state> don’t support power
off save.
6.2.19 AT+CHFA Swap the Audio Channels
AT+CHFA Swap the Audio Channels
Test Command
AT+CHFA=?
Response
+CHFA: (0=NORMAL_AUDIO, 1=AUX_AUDIO,
2=HANDFREE_AUDIO, 3=AUX_HANDFREE_AUDIO,
4=PCM_AUDIO)
OK
Response
+CHFA: <n>
OK
Read Command
AT+CHFA?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CHFA=<n>
Parameter
<n> 0 Main audio channel
1 Aux audio channel
2 Main audio channel hand free mode
3 Aux audio channel hand free mode
4 PCM channel
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 This Command swaps the audio channels among different channels.
 Scope of parameter <channel> is different among SIM800 series
project, please refer to chapter 21 for details.
 Main audio channel hand free mode is the same with main audio
channel; aux audio channel hand free mode is the same with aux audio 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 160 2015-08-03
channel. Channel 2, 3 is virtual channel.
6.2.20 AT+CSCLK Configure Slow Clock
AT+CSCLK Configure Slow Clock
Response
+CSCLK: (list of supported <n>s)
OK
Test Command
AT+CSCLK=?
Parameter
See Write Command
Response
+CSCLK: <n>
OK
Read Command
AT+CSCLK?
Parameter
See Write Command
Response
OK
ERROR
Write Command
AT+CSCLK=<n
>
Parameter
<n> 0 Disable slow clock, module will not enter sleep mode.
1 Enable slow clock, it is controlled by DTR. When DTR is
high, module can enter sleep mode. When DTR changes to low
level, module can quit sleep mode.
2 Enable slow clock automatically. When there is no interrupt
(on air and hardware such as GPIO interrupt or data in serial
port), module can enter sleep mode. Otherwise, it will quit sleep
mode.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
 There are two caveats when you want to quit sleep mode in mode 2:
1, You should input some characters (at least one) to awake module
2, An interval time of 100ms more is necessary between waking characters
and following AT commands,otherwise the waking characters will not be
discarded completely,and messy codes will be produced which may leads to
UART baudrate re-adaptation.
 The +CSCLK value can not be reset by AT&F or ATZ command. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 161 2015-08-03
6.2.21 AT+CENG Switch on or off Engineering Mode
AT+CENG Switch on or off Engineering Mode
Response
TA returns the list of supported modes.
+CENG: (list of supported <mode>s),(list of supported <Ncell>s)
OK
Test Command
AT+CENG=?
Parameters
See Write Command
Read Command
AT+CENG?
Response
Engineering Mode is designed to allow a field engineer to view and test the
network information received by a handset, when the handset is either in
idle mode or dedicated mode (that is: with a call active). In each mode, the
engineer is able to view network interaction for the "serving cell" (the cell
the handset is currently registered with) or for the neighboring cells.
TA returns the current engineering mode. The network information
including serving cell and neighboring cells are returned. <cell> carry with
them corresponding network interaction.
+CENG: <mode>,<Ncell>
[+CENG:
<cell>,"<bcch>,<rxl>,<rxq>,<mcc>,<mnc>,<bsic>,<cellid>,<rla>,
<txp>,<lac>,<TA>[<dbm>,<c1>,<c2>,<tch>,<ts>,<maio>,<hsn>,<rxq_s
ub>,<rxq_full>,<ch_mod>]"<CR><LF>+CENG:
<cell>,"<bcch>,<rxl>,<bsic>[,<cellid>,]<mcc>,<mnc>,<lac>"…]
OK
if <mode>=3
+CENG: <mode>,<Ncell>
[+CENG:
<cell>,<mcc>,<mnc>,<lac>,<cellid>,<bsic>,<rxl><CR><LF>+CENG:
<cell>,<mcc>,<mnc>,<lac>,<cellid>,<bsic>,<rxl>…]
OK
if <mode>=4
+CENG: <mode>,<Ncell>
[+CENG: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 162 2015-08-03
<cell>,"<bcch>,<rxl>,<rxq>,<mcc>,<mnc>,<bsic>,<cellid>,<rla>,
<txp>,<lac>,<TA>,<dbm>,<c1>,<c2>,<tch>,<ts>,<maio>,<hsn>,<rxq_s
ub>,<rxq_full>,<ch_mod>"<CR><LF>+CENG:
<cell>,"<bcch>,<rxl>,<bsic>,<cellid>,<mcc>,<mnc>,<lac>,<c1>,<c2>"
…]
OK
Parameters
See Write Command
Response
Switch on or off engineering mode. It will report +CENG: (network
information) automatically if <mode>=2.
OK
ERROR
Write Command
AT+CENG=<mo
de>[,<Ncell>]
Parameters
<mode> 0 Switch off engineering mode
 1 Switch on engineering mode
 2 Switch on engineering mode, and activate the
URC report of network information
 3 Switch on engineering mode, with limited network
information
 4 Switch on engineering mode, with extern information
<Ncell> 0 Un-display neighbor cell ID
 1 Display neighbor cell ID
 If <mode> = 3, ignore this parameter.
<cell> 0 The serving cell
 1-6 The index of the neighboring cell
<arfcn> Absolute radio frequency channel number, in decimal format
<bcch> ARFCN(Absolute radio frequency channel number) of
BCCH carrier, in decimal format
<rxl> Receive level, in decimal format
<rxq> Receive quality, in decimal format
<mcc> Mobile country code, in decimal format
<mnc> Mobile network code, in decimal format
<bsic> Base station identity code, in decimal format
<cellid> Cell id, in hexadecimal format
<lac> Location area code, in hexadecimal format
<rla> Receive level access minimum, in decimal format
<txp> Transmit power maximum CCCH, in decimal format
<TA> Timing Advance, in decimal format
<dbm> Receiving level in dBm
<c1> C1 value
<c2> C2 value
<tch> ARFCN of the TCH carrier, in decimal format 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 163 2015-08-03
<ts> Timeslot number
<maio> MAIO value
<hsn> HSN value
<rxq_sub> Receiving quality (sub), range is 0 - 7
<rxq_full> Receiving quality (full), range is 0 – 7
<ch_mod> Speech channel type, in string format
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 <lac> and <cellid> are in hex, <ch_mod> is string, and others are in
DEC.
 If network supports frequency hopping, then <tch> is invalid, value is
0.
 Under non-dedicated mode:
<tch>,<ts>,<maio>,<hsn>,<rxq_sub>,<rxq_full>,<ch_mod>
parameters are invalid, shown in "x".
 Under dedicated mode, <c1> and<c2> in service cell are invalid, either
all neighbor cell parameters.
 Parameter <rssi> value of "AT+CSQ" is half of <rxl>. The sum of
<dbm> and <rxl> is 113. That is to say, <rssi> = <rxl>/2 and
<dbm>=113-<rxl>.
6.2.22 AT+SCLASS0 Store Class 0 SMS to SIM When Received Class 0 SMS
AT+SCLASS0 Store Class 0 SMS to SIM When Module Received Class 0 SMS
Response
+SCLASS0: (0, 1)
OK
Test Command
AT+SCLASS0=?
Parameters
See Write Command
Response
+SCLASS0: <mode>
OK
Read Command
AT+SCLASS0?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SCLASS0=<
mode>
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 164 2015-08-03
<mode>
0 Disable to store Class 0 SMS to SIM when module receives
Class 0 SMS
1 Enable to store Class 0 SMS to SIM when module receives
Class 0 SMS
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.23 AT+CCID Show ICCID
AT+CCID Show ICCID
Test Command
AT+CCID=?
Response
OK
Execution
Command
AT+CCID
Response
Ccid data [ex. 898600810906F8048812]
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
2s
Reference Note
6.2.24 AT+CMTE Set Critical Temperature Operating Mode or Query Temperature
AT+CMTE Set Critical Temperature Operating Mode or Query Temperature
Response
+CMTE: <mode>,<Temperature>
OK
Read Command
AT+CMTE?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CMTE=<mo
de>
Parameters
<mode> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 165 2015-08-03
 0 Disable temperature detection
 1 Enable temperature detection
<Temperature> range from -40.00 to 95.00
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
2s
Reference Note
 When temperature is extremely high or low, product will power off.
 URCs indicating the alert level "1" or "-1" are intended to enable the
user to take appropriate precautions, such as protecting the module
from exposure to extreme conditions, or saving or backing up data etc.
Level "2" or "-2" URCs are followed by immediate shutdown.
6.2.25 AT+CMGDA Delete All SMS
AT+CMGDA Delete All SMS
Response
+CMGDA: (list of supported <type>s)
OK
+CMS ERROR: <err>
Test Command
AT+CMGDA=?
Parameter
See Write Command
Response
OK
ERROR
+CMS ERROR: <err>
Write Command
AT+CMGDA=<t
ype>
Parameter
<type>
1) If text mode:
 "DEL READ" Delete all read messages
 "DEL UNREAD" Delete all unread messages
 "DEL SENT" Delete all sent SMS
 "DEL UNSENT" Delete all unsent SMS
 "DEL INBOX" Delete all received SMS
 "DEL ALL" Delete all SMS
2) If PDU mode:
 1 Delete all read messages
 2 Delete all unread messages
 3 Delete all sent SMS
 4 Delete all unsent SMS
 5 Delete all received SMS
 6 Delete all SMS 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 166 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
5s（delete 1 message）
25s（delete 50 messages）
25s（delete 150 messages）
Reference Note
6.2.26 AT+STTONE Play SIM Toolkit Tone
AT+STTONE Play SIM Toolkit Tone
Response
+STTONE: (list of supported <mode>s),(list of supported <tone>s),(list of
supported <duration>s)
OK
If error is related to ME functionality:
+CME ERROR: <err>
Test Command
AT+STTONE=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
The playing is stopped or completed.
+STTONE: 0
Write Command
AT+STTONE=<
mode>,<tone>,<
duration>
Parameters
<mode> 0 Stop playing tone
 1 Start playing tone
<tone> Numeric type
 1 Dial Tone
 2 Called Subscriber Busy
3 Congestion
 4 Radio Path Acknowledge
 5 Radio Path Not Available / Call Dropped
 6 Error / Special information
 7 Call Waiting Tone
 8 Ringing Tone
16 General Beep
17 Positive Acknowledgement Tone
18 Negative Acknowledgement or Error Tone 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 167 2015-08-03
19 Indian Dial Tone
20 American Dial Tone
<duration> Numeric type, in milliseconds.
 Max requested value = 255*60*1000 = 15300000ms
 (supported range = 10-15300000)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.27 AT+SIMTONE Generate Specifically Tone
AT+SIMTONE Generate Specifically Tone
Response
+SIMTONE: (0,1),(20-20000),(200-25500),(0,100-25500),(10-500000)
OK
Test Command
AT+SIMTONE=
?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
The playing is stopped or completed.
+SIMTONE: 0
Write Command
AT+SIMTONE=
<mode>,<freque
ncy>,<periodOn
>,<periodOff>[,<
duration>]
Parameters
<mode> 0 Stop playing tone
1 Start playing tone
<frequency> The frequency of tone to be generated
<periodOn> The period of generating tone, must be multiple of 100
<periodOff> The period of stopping tone, must be multiple of 100
<duration> Duration of tones in milliseconds
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 168 2015-08-03
6.2.28 AT+CCPD Enable or Disable Alpha String
AT+CCPD Enable or Disable Alpha String
Response
+CCPD: (0,1)
OK
Test Command
AT+CCPD=?
Parameter
See Write Command
Response
+CCPD: <mode>
OK
Read Command
AT+CCPD?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CCPD=<mo
de>
Parameter
<mode>
0 Disable to present alpha string
1 Enable to present alpha string
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
6.2.29 AT+CGID Get SIM Card Group Identifier
AT+CGID Get SIM Card Group Identifier
Response
+GID: <gid1>,<gid2>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+CGID
Parameters
<gid1> Integer type of SIM card group identifier 1
<gid2> Integer type of SIM card group identifier 2
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 169 2015-08-03
Mode
Max Response
Time
-
Reference Note
If the SIM supports GID files, the GID values will be retuned. Otherwise
0xff is retuned.
6.2.30 AT+MORING Show State of Mobile Originated Call
AT+MORING Show State of Mobile Originated Call
Response
+MORING: (0,1)
OK
Test Command
AT+MORING=?
Parameter
See Write Command
Response
+MORING: <mode>
OK
Read Command
AT+MORING?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameter
<mode> 0 Not show call state of mobile originated call
1 Show call state of mobile originated call. After the call
number is dialed, the URC strings of MO RING will be sent
if another call is alerted and the URC strings of MO
CONNECTED will be sent if the call is established.
Write Command
AT+MORING=<
mode>
Unsolicited Result Code
MO RING
The call is alerted.
MO CONNECTED
The call is established.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 170 2015-08-03
Reference Note
6.2.31 AT+CMGHEX Enable or Disable Sending Non-ASCII Character SMS
AT+CMGHEX Enable or Disable Sending Non-ASCII Character SMS
Response
+CMGHEX: (list of supported <mode>s)
OK
Test Command
AT+CMGHEX=
?
Parameter
See Write Command
Response
+CMGHEX: <mode>
OK
Read Command
AT+CMGHEX?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CMGHEX=
<mode>
Parameter
<mode> 0 Send SMS in ordinary way
1 Enable to send SMS varying from 0x00 to 0x7f except
0x1a and 0x1b under text mode and GSM character set
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Only be available in TEXT mode and AT+CSCS="GSM".
6.2.32 AT+CCODE Configure SMS Code Mode
AT+CCODE Configure SMS Code Mode
Response
+CCODE: (0,1)
OK
Test Command
AT+CCODE=?
Parameter
See Write Command
Read Command
AT+CCODE?
Response
+CCODE:<mode> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 171 2015-08-03
OK
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CCODE=<
mode>
Parameter
<mode> 0 Code mode compatible with NOKIA
 1 Code mode compatible with SIEMENS
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.33 AT+CIURC Enable or Disable Initial URC Presentation
AT+CIURC Enable or Disable Initial URC Presentation
Response
+CIURC: (0,1)
OK
Test Command
AT+CIURC=?
Parameters
See Write Command
Response
+CIURC:<mode>
OK
Read Command
AT+CIURC?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CIURC=<m
ode>
Parameters
<mode> 0 Disable URC presentation.
 1 Enable URC presentation
Parameter Saving
Mode
AT&W_SAVE
Max Response - 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 172 2015-08-03
Time
Reference Note
When module is powered on and initialization procedure is over.
URC "Call Ready" will be presented if <mode> is 1.
6.2.34 AT+CPSPWD Change PS Super Password
AT+CPSPWD Change PS Super Password
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CPSPWD=<
oldpwd>,<newp
wd>
Parameters
<oldpwd> String type(string should be included in quotation marks).
 Old password and length should be 8.
<newpwd> String type(string should be included in quotation marks).
 New password and length should be 8.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 Default value of <oldpwd> is "12345678".
 If module is locked to a specific SIM card through AT+CLCK and
password lost or SIM state is PH-SIM PUK, user can use the super
password to unlock it.
 It is not supported temporarily.
6.2.35 AT+EXUNSOL Enable or Disable Proprietary Unsolicited Indications
AT+EXUNSOL Enable or Disable Proprietary Unsolicited Indications
Response
+EXUNSOL: (list of supported <exunsol>s)
OK
Test Command
AT+EXUNSOL=
?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+EXUNSOL=
<exunsol>,<mod
e>
Parameters
<exunsol> String type(string should be included in quotation marks).
values are currently reserved by the present document 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 173 2015-08-03
"SQ" Signal Quality Report
 Displays signal strength and channel bit error rate (similar to
AT+CSQ) in form +CSQN: <rssi>,<ber>when values change.
<mode>
0 Disable
1 Enable
2 Query
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
6.2.36 AT+CGMSCLASS Change GPRS Multislot Class
AT+CGMSCLASS Change GPRS Multislot Class
Response
MULTISLOT CLASS: (2,4,8,9,10,12)
OK
Test Command
AT+CGMSCLA
SS=?
Parameter
See Write Command
Response
MULTISLOT CLASS: <class>
OK
Read Command
AT+CGMSCLA
SS?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGMSCLA
SS=<class>
Parameter
<class> GPRS multi-slot class
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 174 2015-08-03
6.2.37 AT+CDEVICE View Current Flash Device Type
AT+CDEVICE View Current Flash Device Type
Read Command
AT+CDEVICE?
Response
Device Name: Current flash device type
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference
V.25ter
Note
6.2.38 AT+CCALR Call Ready Query
AT+CCALR Call Ready Query
Response
+CCALR: (list of supported <mode>s)
OK
Test Command
AT+CCALR=?
Parameter
<mode> A numeric parameter which indicates whether the module
is ready for phone call.
 0 Module is not ready for phone call
1 Module is ready for phone call
Response
ME returns the status of result code presentation and an integer <n>
which shows whether the module is currently ready for phone call.
+CCALR: <mode>
OK
Read Command
AT+CCALR?
Parameter
See Test Command
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.39 AT+GSV Display Product Identification Information
AT+GSV Display Product Identification Information 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 175 2015-08-03
Execution
Command
AT+GSV
Response
TA returns product information text
Example:
SIMCOM_Ltd
SIMCOM_SIM800H
Revision: 1308B01SIM800H32
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.40 AT+SGPIO Control the GPIO
AT+SGPIO Control the GPIO
Response
+SGPIO: (0-1),(1-7),(0-1),(0-1)
OK
Test Command
AT+SGPIO=?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SGPIO=<ope
ration>,<GPIO>,
<function>,<level
>
Parameters
<Operation> 0 Set the GPIO function including the GPIO output.
 1 Read the GPIO level. Please note that only when the gpio is
set as input, user can use parameter 1 to read the GPIO level, otherwise the
module will return "ERROR".
<GPIO> The GPIO you want to be set. (It has relations with the
hardware, please refer to the hardware manual)
<function> Only when <Operation> is set to 0, this option takes
effect.
 0 Set the GPIO to input.
 1 Set the GPIO to output
<level> 0 Set the GPIO low level
 1 Set the GPIO high level
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 176 2015-08-03
Max Response
Time
-
Reference Note
Scope of parameter <GPIO> is different among SIM800 series project,
please refer to chapter 21 for details.
6.2.41 AT+SPWM Generate the Pulse-Width-Modulation
AT+SPWM Generate the Pulse-Width-Modulation
Response
+SPWM: (list of supported <index>s),(list of supported <freq>s),(list of
supported <level>s)
OK
Test Command
AT+SPWM=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+SPWM=<in
dex>,<freq>,<lev
el>
Parameters
<index> Integer type: the index number of PWM port, which value is
0-2; Current only support one channel,whether 0 or 1 or 2,the PWM port is
the same.
0 For buzzer (according to the hardware support or not).
1 Corresponding to PWM_OUT0 in the hardware circuit
2 Corresponding to PWM_OUT1 in the hardware circuit
<freq> The range of <freq> is 0-100000, the output frequency equals
to CLK/(PWM_CNT+1),where PWM_CNT=CLK/ period-1.
<level> Duty ratio = PWM_THRES/( PWM_CNT+1)
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
The PWM clock source is 13MHz, the equation of the final frequency is:
frequency = CLK/(PWM_CNT+1), where PWM_CNT = CLK/freq – 1.
However, the equation can not be simplified. PWM_THRES should be less
than the PWM_CNT.
If freq euals 0, the output of PWM is in low state.
6.2.42 AT+ECHO Echo Cancellation Control
AT+ECHO Echo Cancellation Control
Test Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 177 2015-08-03
+ECHO: (0,1),(0-65535),(0-65535),(0-65535),(0-65535),(0,1)
OK
AT+ECHO=?
Parameters
See Write Command
Response
+ECHO: (<mic0>,<nlp0>, <aec0>,<nr0>, <ns0>),(<micn>,<nlpn>,
<aecn>,<nrn>, <nsn>)
OK
Read Command
AT+ECHO?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+ECHO=<mi
c>,<nlp>,<aec>,<
nr>,<ns>[,<state
>] Parameters
<mic> Audio channel
0 Main audio handset channel
1 Main audio handfree channel
<nlp> Nonlinear processing remove residual echo and background
noise
<aec> Acoustic echo cancellation
<nr> Noise reduction
<ns> Noise suppression
<state> Enable or disable to close echo algorithm
0 Echo algorithm be closed
1 Echo algorithm be actived
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
For this command, please refer to actual model.
The default state the echo echo algorithm be actived, and the read command
is not displayed.
6.2.43 AT+CAAS Control Auto Audio Switch
AT+CAAS Control Auto Audio Switch
Test Command
AT+CAAS=?
Response
+CAAS: (0-2)
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 178 2015-08-03
OK
Parameter
See Write Command
Response
+CAAS: <mode>
OK
Read Command
AT+CAAS?
Parameter
See Write Command
Response
This parameter setting determines whether or not the audio channel will be
switched automatically to the corresponding channel in case of headset
attaching or detaching.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CAAS=<mo
de>
Parameter
<mode>
0 Disable automatic audio channel switch function, the headset
HOOK function is disabled;
1 Enable automatic audio channel switch function, the headset
HOOK function is enabled;
2 Disable automatic audio channel switch function, the headset
HOOK function is enabled.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
For this command, please refer to actual model.
The headset detection is still worked when <mode> is set to 0.

6.2.44 AT+SVR Configure Voice Coding Type for Voice Calls
AT+SVR Configure Voice Coding Type for Voice Calls
Response
+SVR: (list of supported <voice_rate_coding>s)
OK
Test Command
AT+SVR=?
Parameter
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 179 2015-08-03
Response
+SVR: <voice_rate_coding>
OK
Read Command
AT+SVR?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <error>
Write Command
AT+SVR=<voice
_rate_coding>
Parameter
<voice_rate_coding> A number parameter which indicate the voice
coding type.
0 FR
1 EFR/FR
2 HR/FR
3 FR/HR
4 HR/EFR
5 EFR/HR
6 AMR-FR/EFR,AMR-HR
7 AMR-FR/EFR,AMR-HR/HR
8 AMR-HR/HR/AMR-FR/EFR
9 AMR-HR/AMR-FR/EFR
10 AMR-HR/AMR-FR/FR
11 AMR-HR/HR/AMR-FR
12 AMR-FR/AMR-HR
13 AMR-FR/FR/AMR-HR
14 AMR-FR/FR/AMR-HR/HR
15 AMR-FR/EFR/FR/AMR-HR/HR
16 AMR-HR/AMR-FR/EFR/FR/HR
17 AMR-FR/AMR-HR/EFR/FR/HR
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
The parameter of AT+SVR is stored in non-volatile memory.
6.2.45 AT+GSMBUSY Reject Incoming Call
AT+GSMBUSY Reject Incoming Call 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 180 2015-08-03
Response
+GSMBUSY: (0,1,2)
OK
Test Command
AT+GSMBUSY=
?
Parameter
See Write Command
Response
+GSMBUSY: <mode>
OK
Read Command
AT+GSMBUSY?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <error>
Write Command
AT+GSMBUSY=
<mode>
Parameter
<mode> 0 Enable incoming call
 1 Forbid all incoming calls
2 Forbid incoming voice calls but enable CSD calls
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
The parameter is not saved if the module power down.
6.2.46 AT+CEMNL Set the List of Emergency Number
AT+CEMNL Set the List of Emergency Number
Response
+CEMNL: (0-1),(1-11),("0"-"999")…
OK
Test Command
AT+CEMNL=?
Parameter
See Write Command
Response
+CEMNL: <mode>[,<amount>,<emergency numbers>]
OK
Read Command
AT+CEMNL?
Parameter
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 181 2015-08-03
Response
OK
ERROR
Write Command
AT+CEMNL=<
mode>[,<amount
>,<emergency
numbers>]
Parameter
<mode> 0 Disable
1 Enable
<amount> Amount of emergency number to be set. Up to 11 emergency
numbers supported
<emergency numbers>
 Emergency numbers to be set by user which range is 0-999
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
6.2.47 AT*CELLLOCK Set the List of ARFCN Which Needs to Be Locked
AT*CELLLOCK Set the List of ARFCN Which Needs to Be Locked
Response
*CELLLOCK: (list of supported <mode>s)[,(list of supported
<amount>s),(list of supported <locked arfcn list>s)[, (list of supported
<locked arfcn list>s)[, (list of supported <locked arfcn list>s)]]]
OK
Test Command
AT*CELLLOC
K=?
Parameter
See Write Command
Response
*CELLLOCK: <mode>[,<amount>,<locked arfcn list>[,<locked arfcn
list>…]]
OK
Read Command
AT*CELLLOC
K?
Parameter
See Write Command
Response
OK
ERROR
Write Command
AT*CELLLOC
K=<mode>[,<am
ount>,<locked
arfcn
list>[,<locked
arfcn list>…]]
Parameter
<mode>
0 Disable
1 Enable
<amout>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 182 2015-08-03
 Amount of arfcn to be set. Up to 3 arfcn supported.
<locked arfcn list>
 Arfcn needs to be locked by user.
 Scope: (0-124), (128-251), (512-885) or (975-1023).
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
6.2.48 AT+SLEDS Set the Timer Period of Net Light
AT+SLEDS Set the Timer Period of Net Light
Response
+SLEDS: (1-3),(0,40-65535),(0,40-65535)
OK
Test Command
AT+SLEDS=?
Parameters
See Write Command
Response
+SLEDS: <mode>,<timer_on>,<timer_off>
OK
Read Command
AT+SLEDS?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SLEDS=<m
ode>,<timer_on>
,<timer_off> Parameters
<mode>
1 Set the timer period of net light while SIM800 series does not
register to the network
2 Set the timer period net light while SIM800 series has already
registered to the network
3 Set the timer period net light while SIM800 series is in the state of
PPP communication
<timer_on>
 Timer period of "LED ON" in decimal format which range is 0 or
40-65535(ms)
<timer_off>
 Timer period of “LED OFF” in decimal format which range is 0 or
40-65535(ms) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 183 2015-08-03
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
The default value is :
<mode>,<timer_on>,<timer_off>
1,64,800
2,64,3000
3,64,300
6.2.49 AT+CBUZZERRING Use the Buzzer Sound as the Incoming Call Ring
AT+CBUZZERRING Use the Buzzer Sound as the Incoming Call Ring
Response
+CBUZZERRING: <mode>
OK
Read Command
AT+CBUZZER
RING?
Parameter
See Write Command
Response
OK
ERROR
Write Command
AT+CBUZZER
RING=<mode>
Parameter
<mode>
0 Disable the function of using buzzer sound as the incoming call ring
1 Enable the function of using buzzer sound as the incoming call ring
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
This buzzer function is depending on the hardware.
6.2.50 AT+CEXTERNTONE Close or Open the Microphone
AT+CEXTERNTONE Close or Open the Microphone
Response
+CEXTERNTONE: (0,1)
OK
Test Command
AT+CEXTERN
TONE=?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 184 2015-08-03
Response
+CEXTERNTONE: <mode>
OK
Read Command
AT+CEXTERN
TONE?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CEXTERNT
ONE=<mode>
Parameters
<mode>
0 Re-open the microphone
1 Close the microphone
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.51 AT+CNETLIGHT Close the Net Light or Open It to Shining
AT+CNETLIGHT Close the Net Light or Open It to Shining
Response
+CNETLIGHT: (0,1)
OK
Test Command
AT+CNETLIGH
T=?
Parameters
See Write Command
Response
+CNETLIGHT: <mode>
OK
Read Command
AT+CNETLIGH
T?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CNETLIGH
T=<mode>
Parameters
<mode>
0 Close the net light
1 Open the net light to shining 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 185 2015-08-03
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
6.2.52 AT+CWHITELIST Set the White List
AT+CWHITELIST Set the White List
Response
+CWHITELIST: (0-3)
OK
Test Command
AT+CWHITELI
ST=?
Parameter
See Write Command
Response
+CWHITELIST: <mode>[,<phone number1>,<phone
number2>,…<phone number30>]
OK
Read Command
AT+CWHITELI
ST?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CWHITELI
ST=<mode>[,<in
dex>,<phone
number>]
Parameters
<mode>
0 Disable
1 Enable only call white list
2 Enable only SMS white list
3 Enable call and SMS white list
<index>
 The index of phone number, scope: 1-30
<phone number>
 Phone number to be set
Parameter Saving
Mode
 AUTO_SAVE
Max Response
Time
-
Reference Note
 Parameter mode value is 1, can save white list phone number ,Other
mode value can not save white list phone number. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 186 2015-08-03
 White list phone numbers are suitable to call and SMS function.
6.2.53 AT+CSDT Switch on or off Detecting SIM Card
AT+CSDT Switch on or off Detecting SIM Card
Response
+CSDT: (0-1)
OK
Test Command
AT+CSDT=?
Parameters
See Write Command
Response
+CSDT: <mode>
OK
Read Command
AT+CSDT?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CSDT=<mo
de>
Parameters
<mode>
0 Switch off detecting SIM card
1 Switch on detecting SIM card
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
 User should select 8-pin SIM card holder to implement SIM card
detection function.
 After plug out simcard, User should wait 2 seconds before plug in SIM
card.
6.2.54 AT+CSMINS SIM Inserted Status Reporting
AT+CSMINS SIM Inserted Status Reporting
Response
+CSMINS: (list of supported <n>s)
OK
Test Command
AT+CSMINS=?
Parameter 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 187 2015-08-03
See Write Command
Response
+CSMINS: <n>,<SIM inserted>
OK
Read Command
AT+CSMINS?
Parameters
See Write Command
Response
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
+CSMINS: <n>,<SIM inserted>
Write Command
AT+CSMINS=<
n>
Parameters
<n> A numeric parameter to show an unsolicited event code
indicating whether the SIM has been inserted or removed.
 0 Disable
1 Enable
<SIM inserted> A numeric parameter which indicates whether SIM
card has been inserted.
0 Not inserted
1 Inserted
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
6.2.55 AT+CSGS Netlight Indication of GPRS Status
AT+CSGS Netlight Indication of GPRS Status
Response
+CSGS: (0-2)
OK
Test Command
AT+CSGS=?
Parameters
See Write Command
Read Command
AT+CSGS?
Response
+CSGS: <mode>
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 188 2015-08-03
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CSGS=<mo
de>
Parameters
<mode>
0 Disable
1 Enable, the netlight will be forced to enter into 64ms on/300ms off
blinking state in GPRS data transmission service. Otherwise, the
netlight state is not restricted.
2 Enable, the netlight will blink according to AT+SLEDS in GPRS
data transmission service.
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
6.2.56 AT+CMICBIAS Close or Open the MICBIAS
AT+CMICBIAS Close or Open the MICBIAS
Response
+CMICBIAS: (0,1)
OK
Test Command
AT+CMICBIAS
=?
Parameters
See Write Command
Response
+CMICBIAS: <mode>
OK
Read Command
AT+CMICBIAS
?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CMICBIAS
=<mode>
Parameters
<mode>
0 Turn off the micbias
1 Turn on the micbias 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 189 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
The settting take effect at the current channel only
6.2.57 AT+DTAM Set TTS and RECORD Play Mode in Call
AT+DTAM Set TTS and RECORD Play Mode in Call
Response
+DTAM: (0-2)
OK
Test Command
AT+DTAM=?
Parameters
See Write Command
Response
+DTAM: <mode>
OK
Read Command
AT+DTAM?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+DTAM=<mo
de>
Parameters
<mode> TTS and record play mode
0 Local
1 Remote
2 Local and remote
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
This command takes effect only in call. TTS and record not in call only play
locally no matter what the mode is. Setting takes effect before TTS or
record play.
6.2.58 AT+SJDR Set Jamming Detection Function
AT+SJDR Set Jamming Detection Funcition
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 190 2015-08-03
Response
+SJDR: (0,1)
OK
Test Command
AT+SJDR=?
Parameters
See Write Command
Response
+SJDR: <status>
or
+SJDR: <status>,<mode>,<var>,<display>,<result>
OK
Read Command
AT+SJDR?
Parameters
See Write Command
Response
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited result codes supported:
+SJDR: NO JAMMING
or
+SJDR: JAMMING DETECTED
or
+SJDR: INTERFERENCE DETECTED
Write Command
AT+SJDR=<status>
[,<mode>][,<var>[,<
display>]]
Parameters
<status>
0 Disable jamming detection
1 Enable jamming detection
<mode>
0 Should inquire status by reading command
1 Only report jamming status via URC from serial port
2 Only report jamming status via the PIN
3 Report jamming status via URC as well as the PIN
<var> The threshold to separate “+SJDR: JAMMING
DETECTED” from “+SJDR: INTERFERENCE
DETECTED” (while the signal strength variance is
higher than <var>, there could be industrial interferences ,
and “+SJDR: INTERFERENCE DETECTED” is
reported).
1-255(default value:255) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 191 2015-08-03
<display>
0 Report jamming status via URC every 3000ms. (only
when <mode> is set to “1” or “3”)
1 Report jamming status via URC when jamming status
changed.(only when <mode> is set to “1” or “3”)
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 When you query jamming detection status after enable jamming
detection mode, you will get the URC of the format below:
+SJDR:1,<mode>,<var>,<display>,<result>
<result>=0, means no jamming.
<result>=1, means jamming is detected.
<result>=2, means industrial interference is detected.
 “+SJDR: INTERFERENCE DETECTED” indicates industrial
interference which signifies unintentional radio link disturbances by
strong industrial radio sources.
 Jamming detection PIN is designed to indicate jamming by
outputting different level. When jamming is detected, the PIN will
output a high level, otherwise, it will output a low level.
 Jamming detection PIN is different among SIM800 series project,
please refer to chapter 21 for details.
6.2.59 AT+CPCMCFG Set PCM Parameter
AT+CPCMCFG Set PCM Parameter
Response
+CPCMCFG: (0-1)
OK
Test Command
AT+CPCMCFG
=?
Parameters
See Write Command
Response
+CPCMCFG: <format>
OK
Read Command
AT+CPCMCFG
?
Parameters
See Write Command
Write Command
AT+CPCMCFG
=<format>
Response
OK
ERROR 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 192 2015-08-03
Parameters
<format> 0 MSB
1 LSB
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Part of the projects supported by this AT command, please refer to chapter
21 for details.
6.2.60 AT+CPCMSYNC Set PCM Sync Parameter
AT+CPCMSYNC Set PCM Sync Parameter
Response
+CPCMSYNC: (0-1),(1-8)
OK
Test Command
AT+CPCMSYN
C=?
Parameters
See Write Command
Response
+CPCMSYNC: <sync>, <length>
OK
Read Command
AT+CPCMSYN
C?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CPCMSYN
C=<sync>,<lengt
h> Parameters
<sync> 0 PCM short sync
1 PCM long sync
<length> 1-8 PCM sync length(1-8)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 The <length> is only supported 1 when PCM sync is short sync.
 Part of the projects supported by this AT command, please refer to
chapter 21 for details. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 193 2015-08-03
6.2.61 AT+CANT Antenna Detecting
AT+CANT Antenna Detecting
Response
+CANT: (list of supported <mode>s),(list of supported
<UrcEnable>s),(list of supported <timer>s)
OK
+CME ERROR: <err>
Test Command
AT+CANT=?
Parameters
See Write Command
Response
+CANT: <mode>, <UrcEnable>, <timer>
OK
+CME ERROR: <err>
Read Command
AT+CANT?
Parameters
See Write Command
Response
OK
+CANT: <status>
Write Command
AT+CANT=<mo
de>,<UrcEnable
>,<timer>
Parameters
<mode> 0 Disable the antenna detecting function
1 Enable the antenna detecting function
<UrcEnable> 0 Disable reporting antenna state by URC
 1 Enable reporting antenna state by URC
<timer> 0-3600 Reporting timer in units of seconds, range:
0-3600. Set timer to 0 will close detect, the
recommend value is 10.
<status> 0 Connected normally
 1 Connected to GND
 2 Connected to other power source
 3 Not connected
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
Part of the projects supported by this AT command, please refer to chapter
21 for details. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 194 2015-08-03
6.2.62 AT+CAGCSET Close or Open AGC Function
AT+CAGCSET Close or Open AGC Funcion
Response
+CAGCSET: (0,1)
OK
Test Command
AT+CAGCSET=
?
Parameters
See Write Command
Response
+CAGCSET: <mode>
OK
Read Command
AT+CAGCSET?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CAGCSET=
<mode>
Parameters
<mode>
0 Close AGC function
1 Open the AGC function
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.63 AT+SD2PCM SD and PCM Switch Function
AT+SD2PCM SD and PCM Switch Function
Response
+SD2PCM: (0,1)
OK
Test Command
AT+SD2PCM=?
Parameters
See Write Command
Response
+SD2PCM: <mode>
OK
Read Command
AT+SD2PCM?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 195 2015-08-03
Response
OK
ERROR
Write Command
AT+SD2PCM=<
mode>
Parameters
<mode>
0 SD card interface is valid
1 PCM interface is valid
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note:
 If user set <mode> from 1 to 0, user should execute at&w command to
save this setting, and then reboot the module by AT command or
pwrkey.
 Part of the projects supported by this AT command, please refer to
chapter 21 for details.
6.2.64 AT+SKPD Keypad Detecting Function
AT+SKPD Keypad Detecting Function
Response
+SKPD: (0-1)
OK
Test Command
AT+SKPD=?
Parameters
See Write Command
Response
+SKPD: <mode>
OK
Read Command
AT+SKPD?
Parameters
See Write Command
Write Command
AT+SKPD=<mo
de>
Response
OK
ERROR
If key has pressed or released, The URC report is:
+SKPD: <value>,<event> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 196 2015-08-03
Parameters
<mode>
0 Disable Keypad detecting function
1 Enable Keypad detecting function
<value> The value of pressed or released keypad
<event> The status of keypad
0 Key released
1 Key pressed
Parameter Saving
Mode
-
Max Response
Time
-
Reference Note
Part of the projects supported by this AT command, please refer to chapter
21 for details.
6.2.65 AT+SIMTONEX Custom Tones
AT+SIMTONEX Custom Tones
Response
+SIMTONEX:
(0,1),(10-500000),(20-20000),(0-20000),(200-25500),(10-25500),(0-4)...
OK
Test Command
AT+SIMTONEX
=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
The playing is stopped or completed.
+SIMTONEX: 0
Write Command
AT+SIMTONEX
=<mode>,<durat
ion>,<freq1>,<fr
eq2>,<periodOn
>,<periodOff>,<
nextIndex>[,<fre
q1>,<freq2>,<pe
riodOn>,<period
Off>,<nextIndex
>…]
Parameters
<mode> 0 Stop playing tone
1 Start playing tone
<duration> Duration of tones in milliseconds
<freq1> The first frequency of tone to be generated
<freq2> The second frequency of tone to be generated
<periodOn> The period of generating tone, must be multiple of 100
<periodOff> The period of stopping tone, must be multiple of 100
<nextIndex> The index of next tone to play
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 197 2015-08-03
Mode
Max Response
Time
-
Reference Note
 A group of parameters <freq1>, <freq2>, <periodOn>, <periodOff>,
<nextIndex> is used to define a tone. The index is defined from 0 to
4.AT+SIMTONEX supports up to five tone and the tones will play
cyclically according the order specified by <nextIndex>. For example,
with "AT+SIMTONEX=1,10000,800,0,500,10,2,2000,0,500,100,
2600,0,500,10,1,1700,0,500,10,4,2200,0,600,100,0",the order is
800-> 2600->2000->1700->2200->800 and so on.
 This command support play in call, but the <duration> is limited to
10s.
6.2.66 AT+CROAMING Roaming State
AT+CROAMING Roaming State
Response
+CROAMING: <state>
OK
Execution
Command
AT+CROAMIN
G
Parameters
<state> 0 Home network
 1 International network(different mcc)
 2 Other network(different mnc but same operator)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
6.2.67 AT+CNETSCAN Perform a Net Survey to Show All the Cells’ Information
AT+CNETSCAN Perform a Net Survey to Show All the Cells’ Information
Response
+CNETSCAN: (list of supported <format>s)
OK
Test Command
AT+CNETSCA
N=?
Parameters
See Write Command
Read Command
AT+CNETSCA
N?
Response
+CNETSCAN: <format> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 198 2015-08-03
OK
Parameters
See Write Command
Response
OK
Write Command
AT+CNETSCA
N=<format> Parameters
<format> 0 Hide lac and bsic information
 1 Show lac and bsic information
Response
If format’s value is 0:
Operator:"<Network_Operator_name>",MCC:<MCC>,MNC:<MNC>
,Rxlev:<Rxlev>,Cellid:<CellID>,Arfcn:<Arfcn>[<CR><LF>Operator:
"<Network_Operator_name2>",MCC:<MCC2>,MNC:<MNC2>,Rxlev
:<Rxlev2>,Cellid:<CellID2>,Arfcn:<Arfcn2>[…]]
If format’s value is 1:
Operator:"<Network_Operator_name>",MCC:<MCC>,MNC:<MNC>
,Rxlev:<Rxlev>,Cellid:<CellID>,Arfcn:<Arfcn>,Lac:<Lac>,Bsic:<Bsic
>[<CR><LF>Operator:"<Network_Operator_name2>",MCC:<MCC2
>,MNC:<MNC2>,Rxlev:<Rxlev2>,Cellid:<CellID2>,Arfcn:<Arfcn2>,L
ac:<Lac2>,Bsic:<Bsic2>[…]]
OK
Execution
Command
AT+CNETSCA
N
Parameters
<Network_Operator_name> Long format alphanumeric of network
operator.
<MCC> Mobile country code.
<MNC> Mobile network code.
<Rxlev> Recieve level, in decimal format.
<CellID> Cell identifier, in hexadecimal format.
<Arfcn> Absolute radio frequency channel number, in decimal format.
<Lac> Location area code, in hexadecimal format.
<Bsic> Base station identity code, in hexadecimal format.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
45s
Reference Note
6.2.68 AT+CMNRP Dual Serial Port Feature
AT+CMNRP Dual Serial Port Feature
Test Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 199 2015-08-03
+CMNRP: (0-1)
OK
AT+CMNRP=?
Parameters
See Write Command
Response
+CMNRP: <mode>
OK
Read Command
AT+CMNRP?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CMNRP=<
mode>
Parameters
<mode> 0 Disable dual serial port
1 Enable dual serial port
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
 Please refer to SIM800 Series_Serial Port_Application Note.doc.
 Part of the projects supported by this AT command, please refer to
chapter 21 for details.
6.2.69 AT+CEGPRS Switch on or off EDGE
AT+CEGPRS Switch on or off EDGE
Response
+CEGPRS: (0,1) , (2,4,8,9,10,12)
OK
Test Command
AT+CEGPRS=?
Parameters
See Write Command
Response
+CEGPRS: <switch>[,<class>]
OK
Read Command
AT+CEGPRS?
Parameters
See Write Command
Write Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 200 2015-08-03
OK
If error is related to ME functionality:
+CME ERROR: <err>
AT+CEGPRS=<
switch>[,<class>]
Parameters
<switch>
 0 Switch off EDGE
 1 Switch on EDGE
<class> EGPRS multi-slot class
Note: If <switch> value is equal to 1, <class> must be input.otherwise
<class> is optional.
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
The module must restart if the EDGE is switched on or off.
6.2.70 AT+CGPIO Control the GPIO by PIN Index
AT+CGPIO Control the GPIO by PIN Index
Response
+CGPIO: (0-1),( list of supported <pin>s),(0-1),(0-1)
OK
Test Command
AT+CGPIO=?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CGPIO=<ope
ration>,<pin>,<fu
nction>,<level> Parameters
<Operation>
0 Set the GPIO function including the GPIO output .
1 Read the GPIO level. Please note that only when the gpio is
set as input, user can use parameter 1 to read the GPIO level, otherwise the
module will return "ERROR".
<pin> The PIN index you want to be set. (It has relations with the
hardware, please refer to the hardware manual)
<function> Only when <Operation> is set to 0, this option takes effect.
0 Set the GPIO to input.
1 Set the GPIO to output
<level>
0 Set the GPIO low level
1 Set the GPIO high level
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 201 2015-08-03
Reference Note
6.2.71 AT+CMEDPLAY Play Audio File
AT+CMEDPLAY Play Audio File
Response
+CMEDPLAY: (0-3)
OK
Test Command
AT+CMEDPLA
Y=?
Parameters
See Write Command
Response
+CMEDPLAY: <state>
OK
Read Command
AT+CMEDPLA
Y?
Parameters
See Write Command
Response
if<mode>=0,2,3, response：
OK
if<mode>=1, start playing
AT+CMEDPLAY=1,<filepath>,<channel>,<volume>
OK
If error is related to MS functionality, response：
+CME ERROR: <err>
Parameters
<mode> command operation mode
0 Stop playing
1 Start playing
2 Pause playing
 3 Resume playing
<filepath> Audio file path and name
<channel> Audio play channel
0 Main channel
1 Aux channel
<volume> Audio play volume,0-100
<state> Audio playing state
0 Idle
1 Playing
2 Paused
Write Command
AT+CMEDPLA
Y=<mode>
Unsolicited result code 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 202 2015-08-03
+CMEDPLAY: 0 // play over
Parameter Saving
Mode
NO_SAVE
Max Response
Time
Reference Note
 <mode> 2 and 3 are not supported when playing audio file during call.
 The audio file can not be played duirng incoming call or outgoing call.
 Only support WAV, PCM, AMR and MP3 format.
 Only support WAV format with 8K 16bit during call.
6.2.72 AT+CMEDIAVOL Control the Volume when Playing Audio File
AT+CMEDIAVOL Control the Volume when Playing Audio File
Response
+CMEDIAVOL: (0-100)

OK
Test Command
AT+CMEDIAVO
L=?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CMEDIAVO
L=<level>
Parameters
<level> 0-100 Integer type value with manufacturer specific range
(smallest value represents the lowest sound level).
Reference Note
The command takes effect only when playing audio file.
6.2.73 AT+SNDLEVEL Set the Sound Level of Special AT Command
AT+SNDLEVEL Set the Sound Level of Special AT Command
Response
+SNDLEVEL: (0-1),(0-100)

OK
Test Command
AT+SNDLEVEL=
?
Parameters
See Write Command
Read Command
AT+SNDLEVEL?
Response
+SNDLEVEL:(0,<soundlevel0>),(1,<soundlevel1>)
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 203 2015-08-03
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SNDLEVEL=
<mode>,<soundle
vel> Parameters
<mode> 0 adjust the sound level of STTONE and SIMTONE
1 adjust the sound level of CLDTMF
<soundlevel> 0-100 Integer type value with manufacturer specific
range (smallest value represents the lowest sound level).
Reference Note
6.2.74 AT+ECHARGE Charge Control
AT+ECHARGE Charge Control
Response
+ECHARGE: (0-1)
OK
Test Command
AT+ECHARGE=
?
Parameters
See Write Command
Response
+ECHARGE: <n>
OK
Read Command
AT+ECHARGE?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+ECHARGE=
<n>
Parameters
<n>
0 Disable charge
1 Enable charge
Parameter Saving
Mode
AT&W_SAVE
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 204 2015-08-03
6.2.75 AT+SIMTIMER Modify the Poll Interval Time Requested by SIM Card
AT+SIMTIMER Modify the Poll Interval Time Requested by SIM Card
Response
+SIMTIMER: (1-26)
OK
Test Command
AT+SIMTIMER
=?
Parameters
See Write Command
Response
+SIMTIMER: <time>
OK
Read Command
AT+SIMTIMER
?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SIMTIMER
=<time>
Parameters
<time> 1-26 second
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
6.2.76 AT+SPE Speech Enhancement Control
AT+SPE Speech Enhancement Control
Response
+SPE: (0,1)
OK
Test Command
AT+SPE=?
Parameters
See Write Command
Response
+SPE: <n>
OK
Read Command
AT+SPE?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 205 2015-08-03
Response
OK
ERROR
Write Command
AT+SPE=<n>
Parameters
<n>
0 Disable Speech Enhancement
1 Enable Speech Enhancement
Reference Note
6.2.77 AT+CCONCINDEX Report Concatenated SMS Index
AT+CCONCINDEX Report Concatenated SMS Index
Test Command
AT+CCONCIND
EX=?
Response
OK
Execution
Command
AT+CCONCIND
EX
Response
+CCONCINDEX: N,i,j,k,...
OK
where N is the number of segments that form the whole concatenated SMS
i,j,k are the SMS indexes of each SMS segment , 0 if segment has not been
received.
If no concatenated SMS is present on the SIM or ME, only OK result code
will be returned.
Parameter Saving
Mode
NO_SAVE
Reference Note
6.2.78 AT+SDMODE SD Mode Switch Function
AT+SDMODE SD and PCM Switch Function
Response
+SDMODE: (0-1)
OK
Test Command
AT+SDMODE=?
Parameters
See Write Command
Read Command
AT+SDMODE?
Response
+SDMODE: <mode>
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 206 2015-08-03
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SDMODE=<
mode>
Parameters
<mode>
0 SD card function is invalid
1 SD card function is valid
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note:
 If user set <mode> from 0 to 1, user should execute "AT&W"
command to save this setting, and then reboot the module by AT
command or pwrkey.
 Part of the project supported by this AT command, please refer to
chapter 21 for details.
6.2.79 AT+SRSPT Control SMS Retransmission
AT+SRSPT Control SMS Retransmission
Response
+ SRSPT: (0,1)
OK
Test Command
AT+SRSPT=?
Parameters
See Write Command
Response
+ SRSPT: <n>
OK
Read Command
AT+SRSPT?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+SRSPT=<n>
Parameters
<n>
0 Enable SMS retransmission
1 Disable SMS retransmission 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 207 2015-08-03
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 208 2015-08-03
7 AT Commands for GPRS Support
7.1 Overview of AT Commands for GPRS Support
Command Description
AT+CGATT Attach or detach from GPRS service
AT+CGDCONT Define PDP context
AT+CGQMIN Quality of service profile (minimum acceptable)
AT+CGQREQ Quality of service profile (requested)
AT+CGACT PDP context activate or deactivate
AT+CGDATA Enter data state
AT+CGPADDR Show PDP address
AT+CGCLASS GPRS mobile station class
AT+CGEREP Control unsolicited GPRS event reporting
AT+CGREG Network registration status
AT+CGSMS Select service for MO SMS messages
7.2 Detailed Descriptions of AT Commands for GPRS Support
7.2.1 AT+CGATT Attach or Detach from GPRS Service
AT+CGATT Attach or Detach from GPRS Service
Response
+CGATT: (list of supported <state>s)
OK
Test Command
AT+CGATT=?
Parameters
See Write Command
Response
+CGATT: <state>
OK
Read Command
AT+CGATT?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGATT=<st
ate>
Parameters
<state> Indicates the state of GPRS attachment 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 209 2015-08-03
 0 Detached
 1 Attached
Other values are reserved and will result in an ERROR response to the
Write Command.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
10 seconds
Reference Note
7.2.2 AT+CGDCONT Define PDP Context
AT+CGDCONT Define PDP Context
Response
+CGDCONT: (range of supported <cid>s),<PDP_type>,,,(list of
supported<d_comp>s),(list of supported<h_comp>s)
[<CR><LF>+CGDCONT:
(range of supported <cid>s), <PDP_type>,,,(list ofsupported
<d_comp>s),(list of supported <h_comp>s)[...]]
OK
Test Command
AT+CGDCONT
=?
Parameters
See Write Command
Response
+CGDCONT:
<cid>,<PDP_type>,<APN>,<PDP_addr>,<data_comp>,<head_comp>
[<CR><LF>+CGDCONT:
<cid>,<PDP_type>,<APN>,<PDP_addr>,<data_comp>,<head_comp>
[…]]
OK
Read Command
AT+CGDCONT
?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CGDCONT
=<cid>[,<PDP_ty
pe>[,APN>[,<PD
P_addr>[,<d_co
mp>[,<h_comp>]
]]]]
Parameters
<cid> (PDP Context Identifier) a numeric parameter which
specifies a particular PDP context definition. The parameter
is local to the TE-MT interface and is used in other PDP
context-related commands. The range of permitted values
(minimum value=1) is returned by the test form of the 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 210 2015-08-03
command.
<PDP_type> (Packet Data Protocol type)
IP Internet Protocol (IETF STD 5)
<APN> (Access Point Name) A string parameter (string should be
included in quotation marks) which is a logical name that
is used to select the GGSN or the external packet data
network. If the value is null or omitted, then the
subscription value will be requested.The default value is
NULL.
<PDP_addr> A string parameter (IP address). Format:
"<n>.<n>.<n>.<n>" where <n>=0..255
If the value is null or equals 0.0.0.0 a dynamic address will
be requested. The allocated address may be read using the
+CGPADDR command
<d_comp> A numeric parameter that controls PDP data compression
 0 –PDP data compression off (default if value is omitted)
<h_comp> A numeric parameter that controls PDP data compression
 0 –PDP header compression off (default if value is omitted)
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note

7.2.3 AT+CGQMIN Quality of Service Profile (Minimum Acceptable)
AT+CGQMIN Quality of Service Profile (Minimum Acceptable)
Response
+CGQMIN: <PDP_type>,(list of supported <precedence>s),(list of
supported <delay>s),(list of supported <reliability>s),(list of supported
<peak>s),(list of supported <mean>s)
[<CR><LF>+CGQMIN: <PDP_type>,(list of supported <precedence>
s),(list of supported <delay>s),(list of supported <reliability>s),(list of
supported <peak>s),(list of supported <mean>s)
[…]]
OK
Test Command
AT+CGQMIN=?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 211 2015-08-03
Response
+CGQMIN: <cid>,<precedence>,<delay>,>reliability>,<peak>,<mean>
[<CR><LF>+CGQMIN:
<cid>,<precedence>,<delay>,<reliability>,<peak>,<mean>
[…]]
OK
Read Command
AT+CGQMIN?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGQMIN=<
cid>[,<precedenc
e>[,<delay>[,<rel
iability>[,<peak>
[,<mean>]]]]]
Parameters
<cid>
1..3 A numeric parameter which specifies a particular
PDP context definition (see +CGDCONT command)
<precedence>
0 QOS precedence class subscribed value
1..3 QOS precedence class
<delay>
0 QOS delay class subscribed value
1..4 QOS delay class subscribed
<reliability>
0 QOS reliability class subscribed value
1..5 QOS reliability class.
<peak>
0 QOS peak throughput class subscribed value
1..9 QOS peak throughput class
<mean>
0 QOS mean throughput class subscribed value
1..18 QOS mean throughput class
31 QOS mean throughput class best effort
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
7.2.4 AT+CGQREQ Quality of Service Profile (Requested)
AT+CGQREQ Quality of Service Profile (Requested) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 212 2015-08-03
Response
+CGQREQ: <PDP_type>,(list of supported <precedence>s),(list of
supported <delay>s),(list of supported <reliability>s),<list of supported
<peak>s),(list of supported <mean>s)
[<CR><LF>+CGQREQ: <PDP_type>,(list of supported <precedence>
s),(list of supported <delay>s),(list of supported <reliability>s),(list of
supported <peak>s),(list of supported <mean>s)
[…]]
OK
Test Command
AT+CGQREQ=?
Parameters
See Write Command
Response
+CGQREQ: <cid>,<precedence>,<delay>,>reliability>,<peak>,<mean>
[<CR><LF>+CGQREQ:
<cid>,<precedence>,<delay>,<reliability>,<peak>,<mean>
[…]]
OK
Read Command
AT+CGQREQ?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGQREQ=c
id>[,<precedence
>[,<delay>[,<reli
ability>[,<peak>[
,<mean>]]]]] Parameters
<cid> A numeric parameter which specifies a particular PDP
context definition (see +CGDCONT Command)
The following parameter are defined in GSM 03.60
<precedence> A numeric parameter which specifies the precedence class
0 QOS precedence class subscribed value
1..3 QOS precedence class
<delay> A numeric parameter which specifies the delay class
0 QOS delay class subscribed value
1..4 QOS delay class
<reliability> A numeric parameter which specifies the reliability class
0 QOS reliability class subscribed value
1..5 QOS reliability class; default value: 3
<peak> A numeric parameter which specifies the peak throughput
class
0 QOS peak throughput class subscribed value
1..9 QOS peak throughput class 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 213 2015-08-03
<mean> A numeric parameter which specifies the mean throughput
class
0 QOS mean throughput class subscribed value
1..18 QOS mean throughput class
31 QOS mean throughput class best effort
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
7.2.5 AT+CGACT PDP Context Activate or Deactivate
AT+CGACT PDP Context Activate or Deactivate
Response
+CGACT: (list of supported <state>s)
OK
Test Command
AT+CGACT=?
Parameters
See Write Command
Response
+CGACT: <cid>,<state>[<CR><LF>+CGACT:<cid>,<state>…]
OK
Read Command
AT+CGACT?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGACT=<st
ate>[,<cid>]
Parameters
<state> Indicates the state of PDP context activation
 0 Deactivated
 1 Activated
 Other values are reserved and will result in an ERROR
response to the Write Command.
<cid> A numeric parameter which specifies a particular PDP context
definition (see +CGDCONT Command). If the <cid> is
omitted, it only affects the first cid.
Parameter Saving
Mode
NO_SAVE
Max Response 150 seconds 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 214 2015-08-03
Time
Reference Note
 This command is used to test PDPs with network simulators.
Successful activation of PDP on real network is not guaranteed.
 Refer to AT+CGDATA clarification for more information.
7.2.6 AT+CGDATA Enter Data State
AT+CGDATA Enter Data State
Test Command
AT+CGDATA=?
Response
+CGDATA: list of supported <L2P>s
OK
Parameter
See Write Command
Response
CONNECT
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGDATA=<
L2P>[,<cid>]
Parameters
<L2P> A string parameter (string should be included in quotation
marks) that indicates the layer 2 protocol to be used between the
TE and MT:
 "PPP" Point to Point protocol for a PDP such as IP
 Other values are not supported and will result in an ERROR
response to the execution Command.
<cid> A numeric parameter which specifies a particular PDP context
definition (see +CGDCONT Command)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
7.2.7 AT+CGPADDR Show PDP Address
AT+CGPADDR Show PDP Address
Response
+CGPADDR: (list of defined <cid>s)
OK
Test Command
AT+CGPADDR=
?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 215 2015-08-03
Response
+CGPADDR: <cid>,<PDP_addr>
[<CR><LF>+CGPADDR: <cid>,<PDP_addr>[…]]
OK
ERROR
Write Command
AT+CGPADDR=
<cid>
Parameters
<cid> A numeric parameter which specifies a particular PDP context
definition (see +CGDCONT Command)
<PDP_addr> String type, IP address
Format: "<n>.<n>.<n>.<n>" where <n>=0..255
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Write command returns address provided by the network if a connection has
been established.
7.2.8 AT+CGCLASS GPRS Mobile Station Class
AT+CGCLASS GPRS Mobile Station Class
Response
+CGCLASS: (list of supported <class>s)
OK
Test Command
AT+CGCLASS=
?
Parameter
See Write Command
Response
+CGCLASS: <class>
OK
Read Command
AT+CGCLASS?
Parameter
See Write Command
Response
OK
ERROR
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGCLASS=
<class>
Parameter
<class> A string parameter(string should be included in quotation
marks) which indicates the GPRS mobile class (in 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 216 2015-08-03
descending order of functionality)
B Class-B mode of operation (A/Gb mode), (not
applicable in Iu mode) MT would operate PS and CS
services but not simultaneously
CG Class C in GPRS only mode
CC Class C in circuit switched only mode (lowest)
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note
It only supports Class B, CG and CC.
7.2.9 AT+CGEREP Control Unsolicited GPRS Event Reporting
AT+CGEREP Control Unsolicited GPRS Event Reporting
Response
+CGEREP: (list of supported <mode>s)
OK
Test Command
AT+CGEREP=?
Parameters
See Write Command
Response
+CGEREP: <mode>
OK
Read Command
AT+CGEREP?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CGEREP=<
mode>
Parameters
<mode>
0 Disable event reporting.
1 Enable event reporting.
Unsolicited Result Codes supported:
+CGEV: NW DEACT <PDP_type>,<PDP_addr>[,<cid>]
+CGEV: ME DEACT <PDP_type>,<PDP_addr>[,<cid>]
+CGEV: NW DETACH
+CGEV: ME DETACH 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 217 2015-08-03
Parameters
<PDP_type> Packet Data Protocol type (see +CGDCONT
Command)
<PDP_addr> Packet Data Protocol address (see +CGDCONT
Command)
<cid> Context Id (see +CGDCONT Command)
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
7.2.10 AT+CGREG Network Registration Status
AT+CGREG Network Registration Status
Response
+CGREG: (list of supported <n>s)
OK
Test Command
AT+CGREG=?
Parameters
See Write Command
Response
+CGREG: <n>,<stat>[,<lac>,<ci>]
OK
If error is related to ME functionality:
+CME ERROR: <err>
Read Command
AT+CGREG?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CGREG=[<
n>]
Parameters
<n> 0 Disable network registration unsolicited result code
1 Enable network registration unsolicited result code
+CGREG:<stat>
2 Enable network registration and location information
unsolicited result code +CGREG: <stat>[,<lac>,<ci>]
<stat>
0 Not registered, MT is not currently searching an
operator to register to.The GPRS service is disabled, the UE is
allowed to attach for GPRS if requested by the user. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 218 2015-08-03
1 Registered, home network.
2 Not registered, but MT is currently trying to attach or
searching an operator to register to. The GPRS service is
enabled, but an allowable PLMN is currently not available. The
UE will start a GPRS attach as soon as an allowable PLMN is
available.
3 Registration denied, The GPRS service is disabled, the UE is
not allowed to attach for GPRS if it is requested by the user.
4 Unknown
5 Registered, roaming
<lac> String type (string should be included in quotation marks); two
byte location area code in hexadecimal format (e.g. "00C3"
equals 195 in decimal)
<ci> String type (string should be included in quotation marks); two
bytes cell ID in hexadecimal format
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
7.2.11 AT+CGSMS Select Service for MO SMS Messages
AT+CGSMS Select Service for MO SMS Messages
Response
+CGSMS: (list of currently available <service>s)
OK
Test Command
AT+CGSMS=?
Parameters
See Write Command
Response
+CGSMS: <service>
OK
Read Command
AT+CGSMS?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CGSMS=<se
rvice>
Parameters
<service> A numeric parameter which indicates the service or service
preference to be used 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 219 2015-08-03
0 Packet Domain
1 Circuit switched
2 Packet Domain preferred (use circuit switched if
GPRS not available)
3 Circuit switched preferred (use Packet Domain if circuit
switched not available)
Parameter Saving
Mode
AUTO_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 220 2015-08-03
8 AT Commands for TCPIP Application Toolkit
8.1 Overview
Command Description
AT+CIPMUX Start up multi-IP connection
AT+CIPSTART Start up TCP or UDP connection
AT+CIPSEND Send data through TCP or UDP connection
AT+CIPQSEND Select data transmitting mode
AT+CIPACK Query previous connection data transmitting state
AT+CIPCLOSE Close TCP or UDP connection
AT+CIPSHUT Deactivate GPRS PDP context
AT+CLPORT Set local port
AT+CSTT Start task and set APN, user name, password
AT+CIICR Bring up wireless connection with GPRS or CSD
AT+CIFSR Get local IP address
AT+CIPSTATUS Query current connection status
AT+CDNSCFG Configure domain name server
AT+CDNSGIP Query the IP address of given domain name
AT+CIPHEAD Add an IP head at the beginning of a package received
AT+CIPATS Set auto sending timer
AT+CIPSPRT Set prompt of ‘>’ when module sends data
AT+CIPSERVER Configure module as server
AT+CIPCSGP Set CSD or GPRS for connection mode
AT+CIPSRIP Show remote IP address and port when received data
AT+CIPDPDP Set whether to check state of GPRS network timing
AT+CIPMODE Select TCPIP application mode
AT+CIPCCFG Configure transparent transfer mode
AT+CIPSHOWTP Display transfer protocol in IP head when received data
AT+CIPUDPMODE UDP extended mode
AT+CIPRXGET Get data from network manually
AT+CIPSCONT Save TCPIP application context
AT+CIPRDTIMER Set remote delay timer
AT+CIPSGTXT Select GPRS PDP context
AT+CIPTKA Set TCP keepalive parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 221 2015-08-03
8.2 Detailed Descriptions of Commands
8.2.1 AT+CIPMUX Start Up Multi-IP Connection
AT+CIPMUX Start Up Multi-IP Connection
Response
+CIPMUX: (0,1)
OK
Test Command
AT+CIPMUX=?
Parameters
See Write Command
Response
+CIPMUX: <n>
OK
Read Command
AT+CIPMUX?
Parameters
See Write Command
Response
OK
Write Command
AT+CIPMUX=<
n> Parameters
<n> 0 Single IP connection
 1 Multi IP connection
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 Only in IP initial state, AT+CIPMUX=1 is effective;
 Only when multi IP connection and GPRS application are both shut
down, AT+CIPMUX=0 is effective.
8.2.2 AT+CIPSTART Start Up TCP or UDP Connection
AT+CIPSTART Start Up TCP or UDP Connection
Test Command
AT+CIPSTART=
?
Response
1) If AT+CIPMUX=0
+CIPSTART: (list of supported <mode>),(<IP address>),(<port>)
+CIPSTART: (list of supported <mode>),(<domain name>),(<port>)
OK
2) If AT+CIPMUX=1
+CIPSTART: (list of supported <n>),(list of supported <mode>),(<IP
address>),(<port>)
+CIPSTART: (list of supported <n>),(list of supported <mode>),(<domain 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 222 2015-08-03
name>),(<port>)
OK
Parameters
See Write Command
Response
1)If single IP connection (+CIPMUX=0)
If format is right response
OK
otherwise response
If error is related to ME functionality:
+CME ERROR <err>
Response when connection exists
ALREADY CONNECT
Response when connection is successful
CONNECT OK
Otherwise
STATE: <state>
CONNECT FAIL
2)If multi-IP connection
(+CIPMUX=1)
If format is right
OK,
otherwise response
If error is related to ME functionality:
+CME ERROR <err>
Response when connection exists
<n>,ALREADY CONNECT
If connection is successful
<n>,CONNECT OK
Otherwise
<n>,CONNECT FAIL
Write Command
1)If single IP
connection
(+CIPMUX=0)
AT+CIPSTART=
<mode>,<IP
address>,<port>
Or
AT+CIPSTART=
<mode>,<domai
n name>,<port>
2)If multi-IP
connection
(+CIPMUX=1)
AT+CIPSTART=
<n>,<mode>,<ad
dress>,<port>
AT+CIPSTART=
<n>,<mode>,<do
main name>,
<port>
Parameters
<n> 0..5 A numeric parameter which indicates the connection
number
<mode> A string parameter which indicates the connection type
 "TCP" Establish a TCP connection
 "UDP" Establish a UDP connection
<IP address> A string parameter which indicates remote server IP address
<port> Remote server port
<domain name> A string parameter which indicates remote server domain
name
<state> A string parameter which indicates the progress of connecting
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 223 2015-08-03
 0 IP INITIAL
 1 IP START
 2 IP CONFIG
 3 IP GPRSACT
 4 IP STATUS
 5 TCP CONNECTING/UDP CONNECTING/
SERVER LISTENING
6 CONNECT OK
 7 TCP CLOSING/UDP CLOSING
8 TCP CLOSED/UDP CLOSED
9 PDP DEACT
In Multi-IP state:
 0 IP INITIAL
 1 IP START
 2 IP CONFIG
 3 IP GPRSACT
 4 IP STATUS
5 IP PROCESSING
9 PDP DEACT
Parameter Saving
Mode
NO_SAVE
Max Response
Time
When mode is multi-IP state, the max response time75 seconds.
When mode is single state, and the state is IP INITIAL, the max response
time is 160 seconds.
Reference Note
 This command allows establishment of a TCP/UDP connection only
when the state is IP INITIAL or IP STATUS when it is in single state.
In multi-IP state, the state is in IP STATUS only. So it is necessary to
process "AT+CIPSHUT" before user establishes a TCP/UDP
connection with this command when the state is not IP INITIAL or IP
STATUS.
 When module is in multi-IP state, before this command is executed, it
is necessary to process "AT+CSTT, AT+CIICR, AT+CIFSR".
8.2.3 AT+CIPSEND Send Data Through TCP or UDP Connection
AT+CIPSEND Send Data Through TCP or UDP Connection
Test Command
AT+CIPSEND=?
Response
1) For single IP connection (+CIPMUX=0)
+CIPSEND: <length>
OK
2) For multi IP connection (+CIPMUX=1)
+CIPSEND: (0-5),<length> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 224 2015-08-03
OK
Parameters
See Write Command
Response
1) For single IP connection (+CIPMUX=0)
+CIPSEND: <size>
OK
2) For multi IP connection (+CIPMUX=1)
+CIPSEND: <n>,<size>
OK
Read Command
AT+CIPSEND?
Parameters
<n> A numeric parameter which indicates the connection number
<size> A numeric parameter which indicates the data length sent at
a time
Response
This Command is used to send changeable length data
If single IP is connected (+CIPMUX=0)
If connection is not established or module is disconnected:
If error is related to ME functionality:
+CME ERROR <err>
If sending is successful:
When +CIPQSEND=0
SEND OK
When +CIPQSEND=1
DATA ACCEPT:<length>
If sending fails:
SEND FAIL
If multi IP connection is established (+CIPMUX=1)
If connection is not established or module is disconnected:
If error is related to ME functionality:
+CME ERROR <err>
If sending is successful:
When +CIPQSEND=0
<n>,SEND OK
When +CIPQSEND=1
DATA ACCEPT:<n>,<length>
If sending fails:
<n>,SEND FAIL
Write Command
1) If single IP
connection
(+CIPMUX=0)
AT+CIPSEND=<
length>
2) If multi IP
connection
(+CIPMUX=1)
AT+CIPSEND=<
n>[,<length>]
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 225 2015-08-03
<n> A numeric parameter which indicates the connection number
<length> A numeric parameter which indicates the length of sending
data, it must be less than <size>
Execution
Command
AT+CIPSEND
response">", then
type data for send,
tap CTRL+Z to
send, tap ESC to
cancel the
operation
Response
This Command is used to send changeable length data.
If single IP connection is established (+CIPMUX=0)
If connection is not established or module is disconnected:
If error is related to ME functionality:
+CME ERROR <err>
If sending is successful:
When +CIPQSEND=0
SEND OK
When +CIPQSEND=1
DATA ACCEPT:<length>
If sending fails:
SEND FAIL
Note
This Command can only be used in single IP connection mode
(+CIPMUX=0) and to send data on the TCP or UDP connection that has
been established already. Ctrl-Z is used as a termination symbol. ESC is
used to cancel sending data. There are at most <size> bytes which can be
sent at a time.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
When +CIPQSEND=0 and the remote server no response, after 645
seconds, “CLOSE” will be reported.
Reference Note
 The data length which can be sent depends on network status.
 Set the time that send data automatically with the Command of
AT+CIPATS.
 Only send data at the status of established connection.
8.2.4 AT+CIPQSEND Select Data Transmitting Mode
AT+CIPQSEND Select Data Transmitting Mode
Response
+CIPQSEND: (0,1)
OK
Test Command
AT+CIPQSEND
=?
Parameters
See Write Command
Read Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 226 2015-08-03
+CIPQSEND: <n>
OK
AT+CIPQSEND
?
Parameter
See Write Command
Response
OK
Write Command
AT+CIPQSEND
=<n> Parameters
<n> 0 Normal mode – when the server receives TCP data, it will
responsd SEND OK.
 1 Quick send mode – when the data is sent to module, it will
responsd DATA ACCEPT:<n>,<length>, while not responding SEND OK.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.5 AT+CIPACK Query Previous Connection Data Transmitting State
AT+CIPACK Query Previous Connection Data Transmitting State
Test Command
AT+CIPACK=?
Response
OK
Response
+CIPACK: <txlen>, <acklen>, <nacklen>
OK
Write Command
If in multi IP
connection
(+CIPMUX=1)
AT+CIPACK=<
n>
Parameters
<n> A numeric parameter which indicates the connection number
<txlen> The data amount which has been sent
<acklen> The data amount confirmed successfully by the server
<nacklen> The data amount without confirmation by the server
Response
+CIPACK: <txlen>, <acklen>, <nacklen>
OK
Execution
Command
If in single IP
connection
(+CIPMUX=0)
AT+CIPACK
Parameters
See Write Command
Parameter Saving
Mode
NO_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 227 2015-08-03
Reference Note
8.2.6 AT+CIPCLOSE Close TCP or UDP Connection
AT+CIPCLOSE Close TCP or UDP Connection
Test Command
AT+CIPCLOSE
=?
Response
OK
Response:
1) For single IP connection (+CIPMUX=0)
CLOSE OK
2) For multi IP connection (+CIPMUX=1)
<id>, CLOSE OK
Write Command
1) If single IP
connection
(+CIPMUX=0)
AT+CIPCLOSE
=<n>
2) If multi IP
connection
(+CIPMUX=1)
AT+CIPCLOSE
=<id>,[<n>]
Parameters
<n> 0 Slow close
1 Quick close
<id> A numeric parameter which indicates the connection number
Execution
Command
AT+CIPCLOSE
Response
If close is successfully:
CLOSE OK
If close fails:
ERROR
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
AT+CIPCLOSE only closes connection at the status of TCP/UDP which
returns CONNECTING or CONNECT OK, otherwise it will return
ERROR, after the connection is closed, the status is IP CLOSE in single IP
mode
8.2.7 AT+CIPSHUT Deactivate GPRS PDP Context
AT+CIPSHUT Deactivate GPRS PDP Context
Test Command
AT+CIPSHUT=?
Response
OK
Execution
Command
AT+CIPSHUT
Response
If close is successful:
SHUT OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 228 2015-08-03
If close fails:
ERROR
Parameter Saving
Mode
NO_SAVE
Max Response
Time
65 seconds
Reference Note
 If this command is executed in multi-connection mode, all of the IP
connection will be shut.
 User can close gprs pdp context by AT+CIPSHUT. After it is closed,
the status is IP INITIAL.
 If "+PDP: DEACT" urc is reported which means the gprs is released by
the network, then user still needs to execute "AT+CIPSHUT"
command to make PDP context come back to original state.
8.2.8 AT+CLPORT Set Local Port
AT+CLPORT Set Local Port
Response
1) For single IP connection (+CIPMUX=0)
+CLPORT: ("TCP","UDP"),(0-65535)
OK
2) For multi IP connection (+CIPMUX=1)
+CLPORT: (0-5),("TCP","UDP"),(0-65535)
OK
Test Command
AT+CLPORT=?
Parameters
See Write Command
Response
1) For single IP connection (+CIPMUX=0)
+CLPORT: <TCP port>,<UDP port>
OK
2) For multi IP connection (+CIPMUX=1)
+CLPORT: 0,<TCP port>,<UDP port>
+CLPORT: 1,<TCP port>,<UDP port>
+CLPORT: 2,<TCP port>,<UDP port>
+CLPORT: 3,<TCP port>,<UDP port>
+CLPORT: 4,<TCP port>,<UDP port>
+CLPORT: 5,<TCP port>,<UDP port>
OK
Read Command
AT+CLPORT?
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 229 2015-08-03
See Write Command
Response
OK
ERROR
Write Command
1) For single IP
connection
(+CIPMUX=0)
AT+CLPORT=<
mode>,<port>
2) For multi IP
connection
(+CIPMUX=1)
AT+CLPORT=<
n>,<mode>,<por
t>
Parameters
<n> 0..5 A numeric parameter which indicates the connection
number this used in multi IP connection
<mode> A string parameter which indicates the connection type
 "TCP" TCP local port
 "UDP" UDP local port
<port> 0-65535 A numeric parameter which indicates the local port
 default value is 0, a port can be dynamically allocated a port.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
This command will be effective when module is set as a Client.
8.2.9 AT+CSTT Start Task and Set APN, USER NAME, PASSWORD
AT+CSTT Start Task and Set APN, USER NAME, PASSWORD
Response
+CSTT: "APN","USER","PWD"
OK
Test Command
AT+CSTT=?
Parameters
See Write Command
Response
+CSTT: <apn>,<user name>,<password>
OK
Read Command
AT+CSTT?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CSTT=<apn
>,<user
name>,<passwor
d>
Parameters
<apn> A string parameter which indicates the GPRS access point
name
<user name> A string parameter which indicates the GPRS user name
<password> A string parameter which indicates the GPRS password 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 230 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Execution
Command
AT+CSTT
Response
OK
ERROR
Reference Note
The write command and execution command of this command is valid only
at the state of IP INITIAL. After this command is executed, the state will be
changed to IP START.
8.2.10 AT+CIICR Bring Up Wireless Connection with GPRS or CSD
AT+CIICR Bring Up Wireless Connection with GPRS or CSD
Test Command
AT+CIICR=?
Response
OK
Execution
Command
AT+CIICR
Response
OK
ERROR
Parameter Saving
Mode
NO_SAVE
Max Response
Time
85 seconds
Reference Note
 AT+CIICR only activates moving scene at the status of IP START,
after operating this Command is executed, the state will be changed to
IP CONFIG.
 After module accepts the activated operation, if it is activated
successfully, module state will be changed to IP GPRSACT, and it
responds OK, otherwise it will respond ERROR.
8.2.11 AT+CIFSR Get Local IP Address
AT+CIFSR Get Local IP Address
Test Command
AT+CIFSR=?
Response
OK
Response
<IP address>
ERROR
Execution
Command
AT+CIFSR
Parameter
<IP address> a string parameter which indicates the IP address assigned
from GPRS or CSD. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 231 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Only after PDP context is activated, local IP Address can be obtained by
AT+CIFSR, otherwise it will respond ERROR. The active status are IP
GPRSACT, TCP/UDP CONNECTING, CONNECT OK, IP CLOSE.
8.2.12 AT+CIPSTATUS Query Current Connection Status
AT+CIPSTATUS Query Current Connection Status
Test Command
AT+CIPSTATUS
=?
Response
OK
Response
+CIPSTATUS: <n>,<bearer>, <TCP/UDP>, <IP address>, <port>,
<client state>
OK
Write Command
If multi IP
connection mode
(+CIPMUX=1)
AT+CIPSTATU
S=<n> Parameters
See Execution Command
Response
1）If in single connection mode (+CIPMUX=0)
OK
STATE: <state>
2) If in multi-connection mode (+CIPMUX=1)
OK
STATE: <state>
If the module is set as server
S: 0, <bearer>, <port>, <server state>
C: <n>,<bearer>, <TCP/UDP>, <IP address>, <port>, <client state>
Execution
Command
AT+CIPSTATUS
Parameters
<n> 0-5 A numeric parameter which indicates the connection
number
<bearer> 0-1 GPRS bearer, default is 0
<server state> OPENING
LISTENING
CLOSING
<client state> INITIAL
 CONNECTING
 CONNECTED 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 232 2015-08-03
 REMOTE CLOSING
 CLOSING
 CLOSED
<state> A string parameter which indicates the progress of
connecting
 0 IP INITIAL
 1 IP START
 2 IP CONFIG
 3 IP GPRSACT
 4 IP STATUS
 5 TCP CONNECTING/UDP CONNECTING
/SERVER LISTENING
6 CONNECT OK
 7 TCP CLOSING/UDP CLOSING
8 TCP CLOSED/UDP CLOSED
9 PDP DEACT
In Multi-IP state:
 0 IP INITIAL
 1 IP START
 2 IP CONFIG
 3 IP GPRSACT
 4 IP STATUS
5 IP PROCESSING
9 PDP DEACT
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.13 AT+CDNSCFG Configure Domain Name Server
AT+CDNSCFG Configure Domain Name Server
Response
+CDNSCFG: ("Primary DNS"),("Secondary DNS")
OK
Test Command
AT+CDNSCFG=
?
Parameters
See Write Command
Read Command
AT+CDNSCFG?
Response
PrimaryDns: <pri_dns>
SecondaryDns: <sec_dns> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 233 2015-08-03
OK
Parameter
See Write Command
Response
OK
ERROR
Write Command
AT+CDNSCFG=
<pri_dns>[,<sec_
dns>] Parameters
<pri_dns> A string parameter which indicates the IP address of the
primary domain name server
<sec_dns> A string parameter which indicates the IP address of the
secondary domain name server
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.14 AT+CDNSGIP Query the IP Address of Given Domain Name
AT+CDNSGIP Query the IP Address of Given Domain Name
Test Command
AT+CDNSGIP=
?
Response
OK
Response
OK
ERROR
If successful, return:
+CDNSGIP: 1, <domain name>,<IP1>[,<IP2>]
If fail, return:
+CDNSGIP:0,<dns error code>
Write Command
AT+CDNSGIP=
<domain name>
Parameters
<domain name> A string parameter which indicates the domain name
<IP1> A string parameter which indicates the first IP address
corresponding to the domain name
<IP2> A string parameter which indicates the second IP address
corresponding to the domain name
<dns error code> A numeric parameter which indicates the error code
8 DNS COMMON ERROR
3 NETWORK ERROR
There are some other error codes as well.
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 234 2015-08-03
Max Response
Time
-
Reference Note
8.2.15 AT+CIPHEAD Add an IP Head at the Beginning of a Package Received
AT+CIPHEAD Add an IP Head at the Beginning of a Package Received
Response
+CIPHEAD: (list of supported <mode>s)
OK
Test Command
AT+CIPHEAD=
?
Parameter
See Write Command
Response
+CIPHEAD: <mode>
OK
Read Command
AT+CIPHEAD?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPHEAD=
<mode>
Parameters
<mode> A numeric parameter which indicates whether an IP header
is added to the received data or not.
 0 Not add IP header
 1 Add IP header, the format is:
1) For single IP connection (+CIPMUX=0)
+IPD,<data length>:
2) For multi IP connection (+CIPMUX=1)
+RECEIVE,<n>,<data length>:
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.16 AT+CIPATS Set Auto Sending Timer
AT+CIPATS Set Auto Sending Timer
Test Command
AT+CIPATS=?
Response
+CIPATS: (list of supported <mode>s),(list of supported <time>) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 235 2015-08-03
OK
Parameters
See Write Command
Response
+CIPATS: <mode>,<time>
OK
Read Command
AT+CIPATS?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPATS=<m
ode>[,<time>]
Parameters
<mode> A numeric parameter which indicates whether set timer when
module is sending data
 0 Not set timer when module is sending data
 1 Set timer when module is sending data
<time> 1..100 A numeric parameter which indicates the seconds
after which the data will be sent
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.17 AT+CIPSPRT Set Prompt of ‘>’ When Module Sends Data
AT+CIPSPRT Set Prompt of ‘>’ When Module Sends Data
Response
+CIPSPRT: (list of supported <send prompt>s)
OK
Test Command
AT+CIPSPRT=?
Parameters
See Write Command
Response
+CIPSPRT: <send prompt>
OK
Read Command
AT+CIPSPRT?
Parameters
See Write Command
Write Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 236 2015-08-03
OK
ERROR
AT+CIPSPRT=<
send prompt>
Parameters
<send prompt> A numeric parameter which indicates whether to echo
prompt ‘>’ after module issues AT+CIPSEND command.
 0 It shows "send ok" but does not prompt echo ‘>’ when sending
is successful.
 1 It prompts echo ‘>’ and shows "send ok" when sending is
successful.
2 It neither prompts echo ‘>’ nor shows "send ok" when sending is
successful.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.18 AT+CIPSERVER Configure Module as Server
AT+CIPSERVER Configure Module as Server
Response
+CIPSERVER: (0-CLOSE SERVER, 1-OPEN SERVER),(1-65535)
OK
Test Command
AT+CIPSERVE
R=?
Parameters
See Write Command
Response
+CIPSERVER: <mode>[,<port>,<channel id>,<bearer>]
OK
Read Command
AT+CIPSERVE
R?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPSERVE
R=<mode>[,<por
t>] Parameters
<mode> 0 Close server
 1 Open server
<port> 1..65535 Listening port
<channel id> Channel id
<bearer> GPRS bearer
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 237 2015-08-03
Mode
Max Response
Time
-
Reference Note
This command is allowed to establish a TCP server only when the state is IP
INITIAL or IP STATUS when it is in single state. In multi-IP state, the state
is in IP STATUS only.
8.2.19 AT+CIPCSGP Set CSD or GPRS for Connection Mode
AT+CIPCSGP Set CSD or GPRS for Connection Mode
Response
+CIPCSGP:0-CSD,DIALNUMBER,USER
NAME,PASSWORD,RATE(0-3)
+CIPCSGP: 1-GPRS,APN,USER NAME,PASSWORD
OK
Test Command
AT+CIPCSGP=?
Parameters
See Write Command
Response
+CIPCSGP: <mode>, <apn>, <user name>, <password>[,<rate>]
OK
Read Command
AT+CIPCSGP?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPCSGP=<
mode>[,
(<apn>,<user
name>,
<password>),(<d
ial
number>,<user
name>,<passwor
d>,<rate>)]
Parameters
<mode> A numeric parameter which indicates the wireless connection
mode
 0 set CSD as wireless connection mode
 1 set GPRS as wireless connection mode
GPRS parameters:
<apn> A string parameter which indicates the access point name
<user name> A string parameter which indicates the user name
<password> A string parameter which indicates the password CSD
parameters:
<dial number> A string parameter which indicates the CSD dial numbers
<user name> A string parameter which indicates the CSD user name
<password> A string parameter which indicates the CSD password
<rate> A numeric parameter which indicates the CSD connection
rate 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 238 2015-08-03
0 2400
 1 4800
 2 9600
3 14400
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.20 AT+CIPSRIP Show Remote IP Address and Port When Received Data
AT+CIPSRIP Show Remote IP Address and Port When Received Data
Response
+CIPSRIP: (list of supported <mode>s)
OK
Test Command
AT+CIPSRIP=?
Parameters
See Write Command
Response
+CIPSRIP: <mode>
OK
Read Command
AT+CIPSRIP?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPSRIP=<
mode>
Parameters
<mode> A numeric parameter which shows remote IP address and
port.
 0 Do not show the prompt
 1 Show the prompt, the format is as follows:
1) For single IP connection (+CIPMUX=0)
+RECV FROM:<IP ADDRESS>:<PORT>
1) For multi IP connection (+CIPMUX=1)
+RECEIVE,<n>,<data length>,<IP ADDRESS>:<PORT>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
- 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 239 2015-08-03
Reference
8.2.21 AT+CIPDPDP Set Whether to Check State of GPRS Network Timing
AT+CIPDPDP Set Whether to Check State of GPRS Network Timing
Response
+CIPDPDP: (list of supported<mode>s, list of supported <interval>, list
of supported <timer>)
OK
Test Command
AT+CIPDPDP=?
Parameters
See Write Command
Response
+CIPDPDP: <mode>, <interval>, <timer>
OK
Read Command
AT+CIPDPDP?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPDPDP=<
mode>[,<interval
>,<timer>] Parameters
<mode>
 0 Not set detect PDP
 1 Set detect PDP
<interval>
1<=interval<=180(s)
<timer>
 1<=timer<=10
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
If "+PDP: DEACT" urc is reported because of module not attaching to gprs
for a certain time or other reasons, user still needs to execute
"AT+CIPSHUT" command makes PDP context come back to original state.
8.2.22 AT+CIPMODE Select TCPIP Application Mode
AT+CIPMODE Select TCPIP Application Mode
Test Command
AT+CIPMODE=
Response
+CIPMODE: (0-NORMAL MODE,1-TRANSPARENT MODE)
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 240 2015-08-03
OK
?
Parameters
See Write Command
Response
+CIPMODE: <mode>
OK
Read Command
AT+CIPMODE?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+CIPMODE=
<mode>
Parameters
<mode> 0 Normal mode
 1 Transparent mode
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.23 AT+CIPCCFG Configure Transparent Transfer Mode
AT+CIPCCFG Configure Transparent Transfer Mode
Response
+CIPCCFG:
(NmRetry:3-8),(WaitTm:2-10),(SendSz:1-1460),(esc:0,1) ,(Rxmode:0,1),
(RxSize:50-1460),(Rxtimer:20-1000)
OK
Test Command
AT+CIPCCFG=
?
Parameters
See Write Command
Response
+CIPCCFG:
<NmRetry>,<WaitTm>,<SendSz>,<esc>,<Rxmode>,<RxSize>,<Rxtime
r>
OK
Read Command
AT+CIPCCFG?
Parameters
See Write Command
Write Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 241 2015-08-03
OK
ERROR
AT+CIPCCFG=
<NmRetry>,<Wa
itTm>,<SendSz>,
<esc>[,<Rxmode
>,<RxSize>,<Rxt
imer>]
Parameters
<NmRetry> Number of retries to be made for an IP packet.
<WaitTm> Number of 100ms intervals to wait for serial input before
sending the packet.
<SendSz> Size in bytes of data block to be received from serial port
before sending.
<esc> Whether turn on the escape sequence, default is TRUE.
 0 Turn off the escape sequence
 1 Turn on the escape sequence
<Rxmode> Whether to set time interval during output data from serial
port.
0 output data to serial port without interval
1 output data to serial port within <Rxtimer> interval.
<RxSize> Output data length for each time, default value is 1460.
<Rxtimer> Time interval (ms) to wait for serial port to output data
again. Default value: 50ms
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
This command will be effective only in single connection mode
(+CIPMUX=0)
8.2.24 AT+CIPSHOWTP Display Transfer Protocol in IP Head When Received Data
AT+CIPSHOWTP Display Transfer Protocol in IP Head When Received Data
Response
+CIPSHOWTP: (list of supported <mode>s)
OK
Test Command
AT+CIPSHOWTP
=?
Parameters
See Write Command
Response
+CIPSHOWTP: <mode>
OK
Read Command
AT+CIPSHOWTP
?
Parameters
See Write Command
Write Command
AT+CIPSHOWTP
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 242 2015-08-03
=<mode> ERROR
Parameters
<mode> A numeric parameter which indicates whether to display
transfer protocol in IP header to received data or not
0 Not display transfer protocol
1 Display transfer protocol, the format is "+IPD,
<data size>,<TCP/UDP>:<data>"
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 This command will be effective only in single connection mode
(+CIPMUX=0).
 Only when +CIPHEAD is set to 1, the setting of this command will
work.
8.2.25 AT+CIPUDPMODE UDP Extended Mode
AT+CIPUDPMODE UDP Extended Mode
Response
1) For single IP connection (+CIPMUX=0)
+CIPUDPMODE: (0-2),("(0-255).(0-255).(0-255).(0-255)"),(1-65535)
OK
2) For multi IP connection (+CIPMUX=1)
+CIPUDPMODE:
(0-5),(0-2),("(0-255).(0-255).(0-255).(0-255)"),(1-65535)
OK
Test Command
AT+CIPUDPMOD
E=?
Parameters
See Write Command
Read Command
AT+CIPUDPMOD
E?
Response
1) For single IP connection (+CIPMUX=0)
+CIPUDPMODE: <mode>[,<IP address>,<Port>]
OK
2) For multi IP connection (+CIPMUX=1)
+CIPUDPMODE: 0, <mode>[,<IP address>,<Port>]
+CIPUDPMODE: 1,<mode>[,<IP address>,<Port>]
+CIPUDPMODE: 2,<mode>[,<IP address>,<Port>]
+CIPUDPMODE: 3,<mode>[,<IP address>,<Port>]
+CIPUDPMODE: 4,<mode>[,<IP address>,<Port>]
+CIPUDPMODE: 5,<mode>[,<IP address>,<Port>] 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 243 2015-08-03
OK
Parameter
See Write Command
Response
OK
ERROR
Write Command
1) For single IP
connection
(+CIPMUX=0)
AT+CIPUDPMOD
E=<mode>[,<IP
address>,<Port>]
2) For multi IP
connection
(+CIPMUX=1)
AT+CIPUDPMOD
E=<n>,<mode>[,<I
P
address>,<Port>]
<n> 0-5 A numeric parameter which indicates the connection
number
<mode> 0 UDP Normal Mode
1 UDP Extended Mode
2 Set UDP address to be sent
<IP address> A string parameter which indicates remote IP address
<port> Remote port
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
8.2.26 AT+CIPRXGET Get Data from Network Manually
AT+CIPRXGET Get Data from Network Manually
Response
If single IP connection (+CIPMUX=0)
+CIPRXGET: (list of supported <mode>s),(list of supported <reqlength>)
OK
If multi IP connection (+CIPMUX=1)
+CIPRXGET: (list of supported <mode>s), (list of supported <id>s), (list
of supported <reqlength>)
OK
Test Command
AT+CIPRXGET
=?
Parameters
See Write Command
Read Command
AT+CIPRXGET
?
Response
+CIPRXGET: <mode>
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 244 2015-08-03
Parameters
See Write Command
Response
OK
ERROR
1)For single IP connection
If “AT+CIPSRIP=1” is set, IP address and port are contained.
if <mode>=1
+CIPRXGET: 1[,<IP ADDRESS>:<PORT>]
if <mode>=2
+CIPRXGET: 2,<reqlength>,<cnflength>[,<IP ADDRESS>:<PORT>]
1234567890…
OK
if <mode>=3
+CIPRXGET: 3,<reqlength>,<cnflength>[,<IP ADDRESS>:<PORT>]
5151…
OK
if <mode>=4
+CIPRXGET: 4, <cnflength>
OK
2)For multi IP connection
If “AT+CIPSRIP=1” is set, IP address and port is contained.
if <mode>=1
+CIPRXGET: 1[,<id>,<IP ADDRESS>:<PORT>]
if <mode>=2
+CIPRXGET: 2,<id>,<reqlength>,<cnflength>[,<IP
ADDRESS>:<PORT>]
1234567890…
OK
if <mode>=3
+CIPRXGET: 3,<id>,<reqlength>,<cnflength>[,<IP
ADDRESS>:<PORT>]
5151…
OK
if <mode>=4
+CIPRXGET: 4, <id>,<cnflength>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
1) If single IP
connection
(+CIPMUX=0)
AT+CIPRXGET
=<mode>[,<reqle
ngth>]
2) If multi IP
connection
(+CIPMUX=1)
AT+CIPRXGET
=<mode>[,<id>,<
reqlength>]
Parameters
<mode> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 245 2015-08-03
0 Disable getting data from network manually, the module is
set to normal mode, data will be pushed to TE directly.
1 Enable getting data from network manually.
2 The module can get data, but the length of output data can
not exceed 1460 bytes at a time.
3 Similar to mode 2, but in HEX mode, which means the
module can get 730 bytes maximum at a time.
4 Query how many data are not read with a given ID.
<id> A numeric parameter which indicates the connection number
<reqlength> Requested number of data bytes (1-1460 bytes)to be read
<cnflength> Confirmed number of data bytes to be read, which may be less
than <length>. 0 indicates that no data can be read.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
To enable this function, parameter <mode> must be set to 1 before
connection.
8.2.27 AT+CIPSCONT Save TCPIP Application Context
AT+CIPSCONT Save TCPIP Application Context
Read Command
AT+CIPSCONT
?
Response
TA returns TCPIP Application Context, which consists of the following
AT Command parameters.
+CIPSCONT: <mode0>
+CIPCSGP: <mode>
Gprs Config APN: <apn>
Gprs Config UserId: <user name>
Gprs Config Password: <password>
+CIPHEAD: <mode>
+CIPSHOWTP: <mode>
+CIPSRIP: <mode>
+CIPATS: <mode>,<time>
+CIPSPRT: <send prompt>,<notshowsendok>
+CIPQSEND: <n>
+CIPMODE: <mode>
+CIPCCFG:
<NmRetry>,<WaitTm>,<SendSz>,<esc>,<Rxmode>,<RxSize>,<Rxti
mer>
+CIPMUX: <n> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 246 2015-08-03
+CIPDPDP: <mode>, <interval>, <timer>
+CIPRXGET: <mode>
+CIPRDTIMER: <rdsigtimer>,<rdmuxtimer>
OK
Parameters
<mode0> 0 Saved, the value from NVRAM
 1 Unsaved, the value from RAM
For other parameters, see the related command.
Execution
Command
AT+CIPSCONT
Response
Module saves current TCPIP Application Contexts to NVRAM. When
system is rebooted, the parameters will be loaded automatically.
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
8.2.28 AT+CIPRDTIMER Set Remote Delay Timer
AT+CIPRDTIMER Set Remote Delay Timer
Response
+CIPRDTIMER: (100-4000),(100-7000)
OK
Test Command
AT+CIPRDTIM
ER=?
Parameters
See Write Command
Response
+CIPRDTIMER: <rdsigtimer>,<rdmuxtimer>

OK
Read Command
AT+CIPRDTIM
ER?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CIPRDTIM
ER=<rdsigtimer
>,<rdmuxtimer>
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 247 2015-08-03
<rdsigtimer> remote delay timer of single connection.
<rdmuxtimer> remote delay timer of multi-connections.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
This command is used to shorten the disconnect time locally when the
remote server has been disconnected.
8.2.29 AT+CIPSGTXT Select GPRS PDP context
AT+CIPSGTXT Select GPRS PDP context
Response
+CIPSGTXT: (0,1)
OK
Test Command
AT+CIPSGTXT
=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CIPSGTXT
=<mode>
Parameters
<mode> 0 select first PDP context
 1 select second PDP context
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
This command is used to select pdp context, only for multi IP connection
(+CIPMUX=1). 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 248 2015-08-03
8.2.30 AT+CIPTKA Set TCP Keepalive Parameters
AT+CIPTKA Set TCP Keepalive Parameters
Response
+CIPTKA: (list of supported <mode>s),(list of supported
<keepIdle>s),(list of supported <keepInterval>),(list of
supported <keepCount>s)
OK
Test Command
AT+CIPTKA=?
Parameters
See Write Command
Response
+CIPTKA: <mode>,<keepIdle>,<keepInterval>,<keepCount>
OK
Read Command
AT+CIPTKA?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+CIPTKA=
<mode>[,<keepI
dle>[,<keepInter
val>[,<keepCoun
t>]]] Parameters
<mode> Set TCP keepalive option.
 0 Disable TCP keep alive mechanism
 1 Enable TCP keep alive mechanism
<keepIdle> Integer type; Idle time (in second) before TCP send the
initial keepalive probe.
30-7200 Default: 7200
<keepInterval> Interval time (in second) between keepalive probes
retransmission.
30-600 Default: 75
<keepCount> Integer type; Maximum number of keepalive
probes to be sent.
1-9 Default: 9
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 249 2015-08-03
9 AT Commands for IP Application
9.1 Overview
Command Description
AT+SAPBR Bearer settings for applications based on IP
9.2 Detailed Descriptions of Commands
9.2.1 AT+SAPBR Bearer Settings for Applications Based on IP
AT+SAPBR Bearer Settings for Applications Based on IP
Response
+SAPBR: (0-4),(1-3), "ConParamTag","ConParamValue"
OK
Test Command
AT+SAPBR=?
Parameters
See Write Command
Response
OK
If<cmd_type> = 2
+SAPBR: <cid>,<Status>,<IP_Addr>
OK
If <cmd_type>=4
+SAPBR:
<ConParamTag>,<ConParamValue>
OK
Unsolicited Result Code
+SAPBR <cid>: DEACT
Write Command
AT+SAPBR=<c
md_type>,<cid>[
,<ConParamTag
>,<ConParamVa
lue>]
Parameters
<cmd_type>
0 Close bearer
 1 Open bearer
 2 Query bearer
 3 Set bearer parameters
 4 Get bearer parameters

<cid> Bearer profile identifier
<Status>
0 Bearer is connecting
1 Bearer is connected 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 250 2015-08-03
2 Bearer is closing
3 Bearer is closed
<ConParamTag> Bearer parameter
 "CONTYPE" Type of Internet connection. Value refer to
<ConParamValue_ConType>
 "APN" Access point name string: maximum 64
characters
 "USER" User name string: maximum 32 characters
 "PWD" Password string: maximum 32 characters
"PHONENUM" Phone number for CSD call
 "RATE" CSD connection rate. For value refer to
<ConParamValue_Rate>
<ConParamValue> Bearer paramer value
<ConParamValue_ConType>
 "CSD" Circuit-switched data call.
 "GPRS" GPRS connection.
<ConParamValue_Rate>
0 2400
1 4800
2 9600
3 14400
<IP_Addr> The IP address of bearer
Parameter Saving
Mode
NO_SAVE
Max Response
Time
When <cmd_type> is 1, 85 seconds
When <cmd_type> is 0, 65 seconds
Reference Note
This command is applied to activate some applications such as HTTP, FTP.
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 251 2015-08-03
10 AT Commands for PING Support
10.1 Overview
Command Description
AT+CIPPING Ping request
AT+CIPCTL Set the mode when receiving an IP packet
AT+CIPFLT Set the rules of IP filter
AT+CIPBEIPING Set the module to be PING or not
10.2 Detailed Descriptions of Commands
10.2.1 AT+CIPPING PING Request
AT+CIPPING PING Request
Response
+CIPPING: (list of supported <retryNum>s),(list of supported
<dataLen>s),(list of supported <timeout>s),(list of supported <ttl>s)
OK
Test Command
AT+CIPPING=?
Parameters
See Write Command
Response
+CIPPING: <retryNum>,<dataLen>,<timeout>,<ttl>
OK
Read Command
AT+CIPPING?
Parameters
See Write Command
Write Command
AT+CIPPING=<IP
addr>[,<retryNum
>[,<dataLen>[,<ti
meout>[,<ttl>]]]]
Response
+CIPPING: <replyId>,<Ip Address>,<replyTime>,<ttl>[<CR><LF>
+CIPPING: <replyId>,<Ip Address>,<replyTime>,<ttl>
[...]]
OK
or
ERROR
or
+CME ERROR: <err>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 252 2015-08-03
Parameters
<IPaddr> Address of the remote host,string type.This
parameter can be either:
- IP address in the format:”xxx.xxx.xxx.xxx”
- Host name solved by a DNS query
<retryNum> The number of Ping Echo Requset to send
1-100 Default: 4
<dataLen> The length of Ping Echo Request data
0-1024 Default: 32
<timeout> The timeout,in units of 100 ms,waiting for a single
Echo Reply
1-600 Default: 100(10 seconds)
<ttl> Time to live
1-255 Default: 64
<replyId> Echo Reply number
<IP Address> IP Address of the remote host
<replyTime> Time,in units of 100 ms, required to receive the
 response
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 Before sending PING Request the GPRS context must be activated.
 When the Echo Request timeout expires (no reply received on
time), the response will contains <replyTime> setting to 600 and
<ttl> setting to 255.
 When executing this command, if PDP context is deactivated for
some reasons, such as out of service, etc., the “+PDP: DEACT”
URC is reported and the command will end immediately.
10.2.2 AT+CIPCTL Set the Mode When Receiving an IP Packet
AT+CIPCTL Set the Mode When Receiving an IP Packet
Response
+CIPCTL: (list of supported <mode>s)
OK
Test Command
AT+CIPCTL=?
Parameters
See Write Command
Read Command
AT+CIPCTL?
Response
+CIPCTL: <mode> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 253 2015-08-03
OK
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CIPCTL=<mod
e>
Parameters
<mode> 0 Disable to send Echo Reply
1 Enable to send Echo Reply to every IP address
pinging it
2 Enable to send Echo Reply only to a subset of IP
Addresses pinging it. This subset of IP Addresses
can be set by “AT+CIPFLT” command.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
The value of <mode> is stored in non volatile memory.
10.2.3 AT+CIPFLT Set the Rules of IP Filter
AT+CIPFLT Set the Rules of IP Filter
Response
+CIPFLT: (list of supported <action>s),(list of supported <item>s)
OK
Test Command
AT+CIPFLT=?
Parameters
See Write Command
Response
+CIPFLT: <item>,<ipAddr>,<mask>
[<CR><LF>+CIPFLT: <item>,<ipAddr>,<mask>
[…]]
OK
Read Command
AT+CIPFLT?
Parameter
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 254 2015-08-03
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CIPFLT=<actio
n>[,<item>][,
<ipAddr>,<mask>]
Parameters
<action> 0 Remove the rule specified by <item>.
<item> must be given.
1 Add the rule specified by <item>.
 If <item> is not given, it can find an empty item
 automatically. <ipAddr> and <mask> must be given.
2 Delete all of rules
<item> The item of IP filter rule
1-20
<ipAddr> Remote IP address,string type. It can be any valid IP
address in the format of ”xxx.xxx.xxx.xxx”
<mask> Mask to be applied to the<ipAddr>,string type.
It can be any valid IP address mask in the
format of ”xxx.xxx.xxx.xxx”
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 When a packet comes from the IP address <coming_IP>, All rules
will be scanned to match the following criterion:
<coming_IP> & <mask> = <ipAddr> & <mask>
If the criterion is matched, the IP packet will be accepted and the
rule scan is finished. If the criterion is not matched, the IP packet
will be ignored.
 The rule is stored in non volatile memory.
10.2.4 AT+CIPBEIPING Set the Module to be PING or Not
AT+CIPBEIPING Set the Module to be PING or Not
Response
+CIPBEIPING: (0,1)
OK
Test Command
AT+CIPBEIPING=
?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 255 2015-08-03
Response
+CIPBEIPING: <mode>
OK
Read Command
AT+CIPBEIPING?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CIPBEIPING=
<mode>
Parameters
<mode> 0 Disable the module to be PING.
1 Enable the module to be PING.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 If the user want the module can be PING by other device, the user
must excute the AT+CIPBEIPING=1 before the module is PING.
 Part of the projects supported by this AT command, please refer to
chapter 21 for details. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 256 2015-08-03
11 AT Commands for HTTP Application
SIM800 series has an embedded TCP/IP stack that is driven by AT commands and enables the
host application to easily access the Internet HTTP service. This chapter is a reference guide to
all the AT commands and responses defined to use with the TCP/IP stack in HTTP Service.
11.1 Overview
Command Description
AT+HTTPINIT Initialize HTTP service
AT+HTTPTERM Terminate HTTP service
AT+HTTPPARA Set HTTP parameters value
AT+HTTPDATA Input HTTP data
AT+HTTPACTION HTTP method action
AT+HTTPREAD Read the HTTP server response
AT+HTTPSCONT Save HTTP application context
AT+HTTPSTATUS Read HTTP status
AT+HTTPHEAD Read the HTTP header information of server response
11.2 Detailed Descriptions of Commands
11.2.1 AT+HTTPINIT Initialize HTTP Service
AT+HTTPINIT Initialize HTTP Service
Test Command
AT+HTTPINIT=
?
Response
OK
Execution
Command
AT+HTTPINIT
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
HTTPINIT should first be executed to initialize the HTTP service. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 257 2015-08-03
11.2.2 AT+HTTPTERM Terminate HTTP Service
AT+HTTPTERM Terminate HTTP Service
Test Command
AT+HTTPTER
M=?
Response
OK
Execution
command
AT+HTTPTER
M
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
11.2.3 AT+HTTPPARA Set HTTP Parameters Value
AT+HTTPPARA Set HTTP Parameters Value
Response
+HTTPPARA: "HTTPParamTag","HTTPParmValue"
OK
Test Command
AT+HTTPPARA
=?
Parameters
See Write Command
Response
+HTTPPARA:
<HTTPParamTag>,<HTTPParamValue>
OK
Read Command
AT+HTTPPARA
?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+HTTPPARA
=<HTTPParamT
ag>,<HTTPPara
mValue> Parameters
<HTTPParamTag>
"CID"

HTTP Parameter
(Mandatory Parameter) Bearer profile identifier 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 258 2015-08-03
"URL"
"UA"
"PROIP"
"PROPORT"
"REDIR"
"BREAK"
"BREAKEND"
"TIMEOUT"
"CONTENT"
"USERDATA"
<HTTPParamValue>
(Mandatory Parameter) HTTP client URL
"http://'server'/'path':'tcpPort' "
"server": FQDN or IP-address
"path": path of file or directory
"tcpPort": default value is 80.
Refer to "IETF-RFC 2616".
The user agent string which is set by the
application to identify the mobile. Usually this
parameter is set as operation system and software
version information.
Default value is "SIMCom_MODULE".
The IP address of HTTP proxy server
The port of HTTP proxy server
This flag controls the redirection mechanism of the
SIM800 when it is acting as HTTP client
(numeric). If the server sends a redirect code
(range 30x), the client will automatically send a
new HTTP request when the flag is set to (1).
Default value is 0 (no redirection).
Parameter for HTTP method "GET", used for
resuming broken transfer.
Parameter for HTTP method "GET", used for
resuming broken transfer. which is used together
with "BREAK",
If the value of "BREAKEND" is bigger than
"BREAK", the transfer scope is from "BREAK" to
"BREAKEND".
If the value of "BREAKEND" is smaller than
"BREAK", the transfer scope is from "BREAK" to
the end of the file.
If both "BREAKEND" and "BREAK" are 0, the
resume broken transfer function is disabled.
HTTP session timeout value, scope: 30-1000
second.
Default value is 120 seconds.
HTTP Parameter value. Type and supported
content depend on related <HTTPParamTag>.
Used to set the “Content-Type” field in HTTP
header.
User data
HTTP Parameter value.Type and supported content
depend on related <HTTPParamTag>.
Parameter Saving NO_SAVE
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 259 2015-08-03
Mode
Max Response
Time
-
Reference Note
Not all the HTTP Server supports "BREAK" and "BREAKEND"
parameters
11.2.4 AT+HTTPDATA Input HTTP Data
AT+HTTPDATA Input HTTP Data
Response
+HTTPDATA: (list of supported <size>s),(list of supported <time>s)
OK
Test Command
AT+HTTPDATA
=?
Parameters
See Write Command
Response
DOWNLOAD
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+HTTPDATA
=<size>,<time>
Parameters
<size> Size in bytes of the data to POST.
1-319488 (bytes)
0 means delete all the content.
<time> 1000-120000 (millisecond) Maximum time in milliseconds to
input data.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
It is strongly recommended to set enough time to input all data with the
length of <size>.
11.2.5 AT+HTTPACTION HTTP Method Action
AT+HTTPACTION HTTP Method Action
Test Command
AT+HTTPACTI
ON=?
Response
+HTTPACTION: (0-2)
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 260 2015-08-03
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Unsolicited Result Code
+HTTPACTION: <Method>,<StatusCode>,<DataLen>
Write Command
AT+HTTPACTI
ON=<Method>
Parameters
<Method> HTTP method specification:
0 GET
1 POST
2 HEAD
<StatusCode> HTTP Status Code responded by remote server, it
identifier refer to HTTP1.1(RFC2616)
100 Continue
101 Switching Protocols
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
307 Temporary Redirect
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Time-out
409 Conflict
410 Gone 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 261 2015-08-03
411 Length Required
412 Precondition Failed
413 Request Entity Too Large
414 Request-URI Too Large
415 Unsupported Media Type
416 Requested range not satisfiable
417 Expectation Failed
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Time-out
505 HTTP Version not supported
600 Not HTTP PDU
601 Network Error
602 No memory
603 DNS Error
604 Stack Busy
<DataLen> The length of data got
Parameter Saving
Mode
NO_SAVE
Max Response
Time
About 5 seconds in test, dependence on network status and the size of
request website
Reference Note
11.2.6 AT+HTTPREAD Read the HTTP Server Response
AT+HTTPREAD Read the HTTP Server Response
Response
+HTTPREAD: (list of supported <start_address>s),(list of supported
<byte_size>s)
OK
Test Command
AT+HTTPREA
D=?
Parameters
See Write Command
Write Command
AT+HTTPREA
D=<start_addres
s>,<byte_size>
Response
+HTTPREAD: <date_len>
<data>
OK
Read data when AT+HTTPACTION=0 or AT+HTTPDATA is executed. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 262 2015-08-03
If<byte_size> is bigger than the data size received, module will only return
actual data size.
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<data> Data from HTTP server or user input.
<start_address> The starting point for data output.
0-319488 (bytes)
<byte_size> The length for data output.
1-319488 (bytes)
<data_len> The actual length for data output.
Execution
Command
AT+HTTPREA
D
Response
+HTTPREAD:<date_len>
<data>
OK
Read all data when AT+HTTPACTION=0 or AT+HTTPDATA is executed.
If error is related to ME functionality:
+CME ERROR: <err>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
11.2.7 AT+HTTPSCONT Save HTTP Application Context
AT+HTTPSCONT Save HTTP Application Context
Read Command
AT+HTTPSCON
T?
Response
TA returns HTTP Application Context, which consists of the following
AT Command parameters.
+HTTPSCONT:<mode>
CID:<value>
URL: <value>
UA: <value>
PROIP: <value>
PROPORT: <value>
REDIR: <value>
BREAK: <value> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 263 2015-08-03
BREAKEND: <value>
USERDATA: <value>
OK
Parameters
<mode> 0 Saved, the value from NVRAM
 1 Unsaved, the value from RAM
For other parameters, see the related command.
Response
TA saves HTTP Application Context which consists of following AT
Command parameters, and when system is rebooted, the parameters will
be loaded automatically.
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+HTTPSCON
T
Parameters
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
This command can only be used after run AT+HTTPINIT.
11.2.8 AT+HTTPSTATUS Read HTTP Status
AT+HTTPSTATUS Read HTTP Status
Test Command
AT+HTTPSTAT
US=?
Response
OK
Read Command
AT+HTTPSTAT
US?
Response
+HTTPSTATUS: <mode>,<status>,<finish>,<remain>
OK
If error is related to ME functionality:
+CME ERROR: <err>
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 264 2015-08-03
Parameters:
<mode>
 GET
 POST
 HEAD
<status>
0 idle
1 receiving
2 sending
<finish>
 The amount of data which have been transmitted
<remain>
 The amount of data remaining to be sent or received
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
11.2.9 AT+HTTPHEAD Read the HTTP Header Information of Server Response
AT+HTTPHEAD Read the HTTP Header Information of Server Response
Test Command
AT+HTTPHEAD
=?
Response
OK
Response
+ HTTPHEAD: <date_len>
<data>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+HTTPHEAD
Parameters
<data_len> The actual length for http header data output
<data> Data from HTTP server
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Read header data when AT+HTTPACTION=0 executed. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 265 2015-08-03
12 AT Commands for FTP Application
SIM800 series has an embedded TCP/IP stack that is driven by AT commands and enables the
host application to easily access the Internet FTP service. This chapter is a reference guide to all
the AT commands and responses defined for using with the TCP/IP stack in FTP Service.
12.1 Overview
Command Description
AT+FTPPORT Set FTP control port
AT+FTPMODE Set active or passive FTP mode
AT+FTPTYPE Set the type of data to be transferred
AT+FTPPUTOPT Set FTP put type
AT+FTPCID Set FTP bearer profile identifier
AT+FTPREST Set resume broken download
AT+FTPSERV Set FTP server address
AT+FTPUN Set FTP user name
AT+FTPPW Set FTP password
AT+FTPGETNAME Set download file name
AT+FTPGETPATH Set download file path
AT+FTPPUTNAME Set upload file name
AT+FTPPUTPATH Set upload file path
AT+FTPGET Download file
AT+FTPPUT Set upload file
AT+FTPSCONT Save FTP application context
AT+FTPDELE Delete specified file in FTP server
AT+FTPSIZE Get the size of specified file in FTP server
AT+FTPSTATE Get the FTP state
AT+FTPEXTPUT Extend upload file
AT+FTPMKD Make directory on the remote machine
AT+FTPRMD Remove directory on the remote machine
AT+FTPLIST List contents of directory on the remote machine
AT+FTPGETTOFS Download file and save in file system
AT+FTPPUTFRMFS Upload file from file system
AT+FTPEXTGET Extend download file
AT+FTPFILEPUT Load file in RAM from file system then upload with FTPPUT
AT+FTPQUIT Quit current FTP session 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 266 2015-08-03
12.2 Detailed Descriptions of Commands
12.2.1 AT+FTPPORT Set FTP Control Port
AT+FTPPORT Set FTP Control Port
Test Command
AT+FTPPORT=
?
Response
OK
Response
+FTPPORT: <value>
OK
Read Command
AT+FTPPORT?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPORT=
<value>
Parameters
<value> The value of FTP Control port, from 1 to 65535.
Default value is 21
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
Numbers above 65535 are illegal as the port identification fields are 16 bits
long in the TCP header.
12.2.2 AT+FTPMODE Set Active or Passive FTP Mode
AT+FTPMODE Set Active or Passive FTP Mode
Test Command
AT+FTPMODE
=?
Response
OK
Response
+FTPMODE: <value>
OK
Read Command
AT+FTPMODE?
Parameters
See Write Command
Write Command
AT+FTPMODE
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 267 2015-08-03
If error is related to ME functionality:
+CME ERROR: <err>
=<value>
Parameters
<value> 0 Active FTP mode
1 Passive FTP mode
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.3 AT+FTPTYPE Set the Type of Data to Be Transferred
AT+FTPTYPE Set the Type of Data to Be Transferred
Test Command
AT+FTPTYPE=
?
Response
OK
Response
+FTPTYPE: <value>
OK
Read Command
AT+FTPTYPE?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPTYPE=
<value>
Parameters
<value> "A" For FTP ASCII sessions
"I" For FTP Binary sessions
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
When this value is set to A, all the data sent by the stack to the FTP server is
made of 7 bits characters (NVT-ASCII: the MSB is set to 0). As a
consequence binary data containing 8 bits characters will be corrupted
during the transfer if the FTPTYPE is set to A. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 268 2015-08-03
12.2.4 AT+FTPPUTOPT Set FTP Put Type
AT+FTPPUTOPT Set FTP Put Type
Test Command
AT+FTPPUTOP
T=?
Response
OK
Response
+FTPPUTOPT: <value>
OK
Read Command
AT+FTPPUTOP
T?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPUTOP
T=<value>
Parameters
<value> "APPE" For appending file
 "STOU" For storing unique file
 "STOR" For storing file
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.5 AT+FTPCID Set FTP Bearer Profile Identifier
AT+FTPCID Set FTP Bearer Profile Identifier
Response
OK
Test Command
AT+FTPCID=?
Parameters
See Write Command
Response
+FTPCID: <value>
OK
Read Command
AT+FTPCID?
Parameter
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 269 2015-08-03
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPCID=<v
alue>
Parameters
<value> Bearer profile identifier refer to AT+SAPBR
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.6 AT+FTPREST Set Resume Broken Download
AT+FTPREST Set Resume Broken Download
Test Command
AT+FTPREST=
?
Response
OK
Response
+FTPREST: <value>
OK
Read Command
AT+FTPREST?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPREST=
<value>
Parameters
<value> Broken point to be resumed
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.7 AT+FTPSERV Set FTP Server Address
AT+FTPSERV Set FTP Server Address 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 270 2015-08-03
Test Command
AT+FTPSERV=
?
Response
OK
Response
+FTPSERV: <value>
OK
Read Command
AT+FTPSERV?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPSERV=
<value>
Parameters
<value> 32-bit number in dotted-decimal notation (i.e.
xxx.xxx.xxx.xxx) or alphanumeric ASCII text string up to 49 characters if
DNS is available
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.8 AT+FTPUN Set FTP User Name
AT+FTPUN Set FTP User Name
Response
OK
Test Command
AT+FTPUN=?
Parameters
See Write Command
Response
+FTPUN: <value>
OK
Read Command
AT+FTPUN?
Parameters
See Write Command
Write Command
AT+FTPUN=<va
lue>
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 271 2015-08-03
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<value> Alphanumeric ASCII text string up to 49 characters.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.9 AT+FTPPW Set FTP Password
AT+FTPPW Set FTP Password
Response
OK
Test Command
AT+FTPPW=?
Parameters
See Write Command
Response
+FTPPW: <value>
OK
Read Command
AT+FTPPW?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPW=<v
alue>
Parameter
<value> Alphanumeric ASCII text string up to 49 characters.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 272 2015-08-03
12.2.10 AT+FTPGETNAME Set Download File Name
AT+FTPGETNAME Set Download File Name
Test Command
AT+FTPGETNA
ME=?
Response
OK
Response
+FTPGETNAME: <value>
OK
Read Command
AT+FTPGETNA
ME?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPGETNA
ME=<value>
Parameters
<value> Alphanumeric ASCII text string up to 99 characters
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.11 AT+FTPGETPATH Set Download File Path
AT+FTPGETPATH Set Download File Path
Test Command
AT+FTPGETPA
TH=?
Response
OK
Response
+FTPGETPATH: <value>
OK
Read Command
AT+FTPGETPA
TH?
Parameters
See Write Command
Write Command
AT+FTPGETPA
TH=<value>
Response
OK
If error is related to ME functionality: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 273 2015-08-03
+CME ERROR: <err>
Parameters
<value> Alphanumeric ASCII text string up to 255 characters
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.12 AT+FTPPUTNAME Set Upload File Name
AT+FTPPUTNAME Set Upload File Name
Test Command
AT+FTPPUTNA
ME=?
Response
OK
Response
+FTPPUTNAME: <value>
OK
Read Command
AT+FTPPUTNA
ME?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPUTNA
ME=<value>
Parameters
<value> Alphanumeric ASCII text string up to 99 characters
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.13 AT+FTPPUTPATH Set Upload File Path
AT+FTPPUTPATH Set Upload File Path 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 274 2015-08-03
Test Command
AT+FTPPUTPA
TH=?
Response
OK
Response
+FTPPUTPATH: <value>
OK
Read Command
AT+FTPPUTPA
TH?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPUTPA
TH=<value>
Parameters
<value> Alphanumeric ASCII text string up to 255 characters
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.14 AT+FTPGET Download File
AT+FTPGET Download File
Test Command
AT+FTPGET=?
Response
OK
Write Command
AT+FTPGET=<
mode>[,<reqleng
th>]
Response
If mode is 1 and it is a successful FTP get session:
OK
+FTPGET:1,1
If data transfer finished:
+FTPGET:1,0
If mode is 1 and it is a failed FTP get session:
OK
+FTPGET:1,<error>
If mode is 2: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 275 2015-08-03
+FTPGET:2,<cnflength>
012345678…
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<mode> 1 For opening FTP get session
 2 For reading FTP download data.
<reqlength> Requested number of data bytes (1-1460)to be read
<cnflength> Confirmed number of data bytes to be read, which may be less
than <length>. 0 indicates that no data can be read.
<error> 61 Net error
 62 DNS error
 63 Connect error
 64 Timeout
 65 Server error
 66 Operation not allow
 70 Replay error
 71 User error
 72 Password error
 73 Type error
 74 Rest error
 75 Passive error
 76 Active error
 77 Operate error
 78 Upload error
79 Download error
86 Manual quit
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
When "+FTPGET:1,1" is shown, then use AT+FTPGET=2,<reqlength> to
read data. If the module still has unread data, "+FTPGET:1,1" will be
shown again in a certain time.
12.2.15 AT+FTPPUT Set Upload File
AT+FTPPUT Set Upload File
Test Command
AT+FTPPUT=?
Response
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 276 2015-08-03
Response
If mode is 1 and it is a successful FTP get session:
OK
+FTPPUT:1,1,<maxlength>

If mode is 1 and it is a failed FTP get session:
OK
+FTPPUT:1,<error>
If mode is 2 and <reqlength> is not 0
+FTPPUT:2,<cnflength>
…… //Input data
OK
If mode is 2 and <reqlength> is 0, it will respond OK, and FTP session will
be closed
OK
If data transfer finished.
+FTPPUT:1,0
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPUT=<
mode>[,<reqleng
th>]
Parameters
<mode> 1 For opening FTP put session
 2 For writing FTP upload data.
<reqlength> Requested number of data bytes(0-<maxlength>) to be
transmitted
<cnflength> Confirmed number of data bytes to be transmitted
<maxlength> The max length of data can be sent at a time. It depends on
the network status.
<error> See "AT+FTPGET"
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
When "+FTPPUT:1,1,<maxlength>" is shown, then use "AT+FTPPUT=2,
<reqlength>" to write data.
12.2.16 AT+FTPSCONT Save FTP Application Context
AT+FTPSCONT Save FTP Application Context
Read Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 277 2015-08-03
TA returns FTP Application Context, which consists of the following AT
Command parameters.
+FTPSCONT:<mode>
+FTPSERV: <value>
+FTPPORT: <value>
+FTPUN: <value>
+FTPPW: <value>
+FTPCID: <value>
+FTPMODE: <value>
+FTPTYPE: <value>
+FTPPUTOPT: <value>
+FTPREST: <value>
+FTPGETNAME: <value>
+FTPGETPATH: <value>
+FTPPUTNAME: <value>
+FTPPUTPATH: <value>
+FTPTIMEOUT: <value>
OK
AT+FTPSCONT
?
Parameters
<mode> 0 Saved, the value from NVRAM
 1 Unsaved, the value from RAM
For other parameters, see the related command.
Execution
Command
AT+FTPSCONT
Response
TA saves FTP Application Context which consists of following AT
Command parameters, and when system is rebooted, the parameters will
be loaded automatically.
OK
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.17 AT+FTPDELE Delete Specified File in FTP Server
AT+FTPDELE Delete Specified File in FTP Server
Response
OK
Test Command
AT+FTPDELE=?
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 278 2015-08-03
Response
If successed:
OK
+FTPDELE:1,0

If failed:
OK
+FTPDELE:1,<error>
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+FTPDELE
Parameters
<error> See "AT+FTPGET"
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
The file to be deleted is specified by the "AT+FTPGETNAME" and
"AT+FTPGETPATH" commands.
12.2.18 AT+FTPSIZE Get the Size of Specified File in FTP Server
AT+FTPSIZE Get the Size of Specified File in FTP Server
Response
OK
Test Command
AT+FTPSIZE=?
Parameters
Execution
Command
AT+FTPSIZE
Response
If successed:
OK
+FTPSIZE:1,0,<size>

If failed:
OK
+FTPSIZE:1,<error>,<0>
If error is related to ME functionality:
+CME ERROR: <err> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 279 2015-08-03
Parameters
<error> See "AT+FTPGET"
<size> The file size. Unit: byte
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
The file is specified by the "AT+FTPGETNAME" and
"AT+FTPGETPATH" commands.
12.2.19 AT+FTPSTATE Get the FTP State
AT+FTPSTATE Get the FTP State
Response
OK
Test Command
AT+FTPSTATE=?
Parameters
Response
+FTPSTATE:<state>
OK
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+FTPSTATE
Parameters
<state>
0 Idle
 1 In the FTP session, including FTPGET, FTPPUT, FTPDELE
and FTPSIZE operation.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
12.2.20 AT+FTPEXTPUT Extend Upload File
AT+FTPEXTPUT Extend Upload File
Test Command
AT+FTPEXTPUT
=?
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 280 2015-08-03
Response
If mode is 0 or 1
OK
If mode is 2
+FTPEXTPUT: <pos>,<len>
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPEXTPUT
=<mode>[,<pos>,<
len>,<timeout>]
Parameters
<mode>
0 use default FTPPUT method
 1 use extend FTPPUT method
 2 download data which need to PUT to RAM
<pos> data offset address 0-300k
<len> data length 0-300k
<timeout> timeout value of serial port 1000ms-1000000ms
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
When extend FTPPUT mode is activated, input data then execute
"AT+FTPPUT=1" to transmit, after session is complete, if successful, it
returns "+FTPPUT: 1,0", otherwise it returns "+FTPPUT: 1,<error>",
<error> see "AT+FTPGET".
12.2.21 AT+FTPMKD Make Directory on the Remote Machine
AT+FTPMKD Make Directory on the Remote Machine
Test Command
AT+FTPMKD=?
Response
OK
Response
If success:
OK
+FTPMKD: 1,0
If failed:
OK
+FTPMKD: 1,<error>
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+FTPMKD
Parameters
<error> See "AT+FTPGET"
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 281 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
The created folder is specified by the "AT+FTPGETPATH" command.
12.2.22 AT+FTPRMD Remove Directory on the Remote Machine
AT+FTPRMD Remove Directory on the Remote Machine
Test Command
AT+FTPRMD=?
Response
OK
Response
If success:
OK
+FTPRMD: 1,0
If failed:
OK
+FTPRMD: 1,<error>
If error is related to ME functionality:
+CME ERROR: <err>
Execution
Command
AT+FTPRMD
Parameters
<error> See "AT+FTPGET"
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
The removed folder is specified by the "AT+FTPGETPATH" command.
12.2.23 AT+FTPLIST List Contents of Directory on the Remote Machine
AT+FTPLIST List Contents of Directory on the Remote Machine
Test Command
AT+FTPLIST=?
Response
OK
Write Command
AT+FTPLIST=<m
ode>[,<reqlength>
]
Response
If mode is 1 and it is a successful FTP get session:
OK
+FTPLIST: 1,1
If data transfer is finished: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 282 2015-08-03
+FTPLIST: 1,0
If mode is 1 and it is a failed FTP get session:
OK
+FTPLIST: 1,<error>
If mode is 2:
+FTPLIST: 2,<cnflength>
012345678…
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameters
<mode>
1 For opening FTP get file list session
2 For reading FTP file list
<reqlength> Requested number of data bytes (1-1460) to be read
<cnflength> Confirmed number of data bytes to be read, which may be
less than <reqlength>. 0 indicates that no data can be read.
<error> See "AT+FTPGET"
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
When "+FTPLIST: 1,1" is shown, "AT+FTPLIST=2,<reqlength>" can be
used to read data. If the module still has unread data, "+FTPLIST: 1,1"
will be shown again in a certain time.
12.2.24 AT+FTPGETTOFS Download File and Save in File System
AT+FTPGETTOFS Download File and Save in File System
Test Command
AT+FTPGETTO
FS=?
Response
OK
Response
+FTPGETTOFS: <status>[,<receivedLength>,<writeLength>]
OK
Read Command
AT+FTPGETTO
FS?
Parameters
<status> the process status of downloading and saving File to File System
through FTP
 0 Not in the process
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 283 2015-08-03
 1 During the process
<receivedLength> The data length received from FTP
<writeLength> The data length saved in File System
Response
If it is a successful FTP get session:
OK

If data transfer finished.
+FTPGETTOFS: 0,<totalLength>
If it is a failed FTP get session:
OK
+FTPGETTOFS: <error>

If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPGETTO
FS=<loc>,<filena
me>[,<num>,<tim
e>]
Parameters
<loc> file saved in ROM or SD card.
 0 saved in ROM, file will be saved in "Disk1:\user\ftp"
 1 saved in SD card, file will be saved in "Disk2:\ftp"
 Note: The local drive "Disk1" or SD drive "Disk2" can be got by
AT+FSDRIVE.
<filename> file name. Alphanumeric ASCII text string up to 64 characters
<num> Number of automatic reconnect times, from 0 to 255.
 Default value is 3.
<time> wait time before module start automatic reconnect, from 0 to 60
seconds.
 Default value is 5 seconds.
<totalLength> The total length of data bytes have been saved
<error> 85 An error related with file system.
 Other errors please see FTPGET.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
 Automatic reconnection will start at break point.
 File will be overwritten if you start this function twice with a same
file name.
12.2.25 AT+FTPPUTFRMFS Upload File from File System.
AT+FTPPUTFRMFS Upload File from File System
Test Command Response 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 284 2015-08-03
AT+FTPPUTFR
MFS=?
OK
Response
+FTPPUTFRMFS: <status>[,<putLength>]
OK
Read Command
AT+FTPPUTFR
MFS?
Parameters
<status> the process status of uploading File from File System through
FTP
 0 not in the process
 1 during the process
<putLength> the data length uploaded from File System
Response
If it is a successful FTP put session:
OK

If data transfer finished.
+FTPPUTFRMFS: 0,<totalLength>
If it is a failed FTP put session:
OK
+FTPPUTFRMFS: <error>

If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPPUTFR
MFS=<filepath>[,
<num>,<time>]
Parameters
<filepath> file path. Alphanumeric ASCII text string up to 128 characters
<num> Number of automatic reconnect times, from 0 to 255.
 Default value is 3.
<time> wait time before module start automatic reconnect, from 0 to 60
seconds.
 Default value is 5 seconds.
<totalLength> the data length uploaded from File System
<error> 85 An error related with file system.
 Other errors pls see FTPGET.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
Automatic reconnect will start at break point. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 285 2015-08-03
12.2.26 AT+FTPEXTGET Extend Download File
AT+FTPEXTGET Extend Download File
Test Command
AT+FTPEXTGE
T=?
Response
OK
Response
+FTPEXTGET: <status>[,<receivedLength>]
OK
Read Command
AT+FTPEXTGE
T?
Parameters
<status> whether run FTPEXTGET or not
 0 not run FTPEXTGET
 1 run FTPEXTGET
<receivedLength> length module has received from FTP server
Response
If mode is 0
OK
If it is a successful FTP get session in mode 1:
OK

If data transfer finished in mode 1
+FTPEXTGET: 1,0
If it is a failed FTP get session in mode 1:
OK
+FTPEXTGET: 1,<error>
If mode is 2:
+FTPEXTGET: 2,<totalLength>
OK
If mode is 3:
+FTPEXTGET: 3,<outputLength>
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
1)if mode is 0 or 1
AT+FTPEXTGE
T=<mode>
2)if mode is 2
AT+FTPEXTGE
T=<mode>,<filen
ame>
3)if mode is 3
AT+FTPEXTGE
T=<mode>,<read
Position>,<readLe
ngth>
Parameters
<mode>
0 use default FTPGET method
 1 start extend FTPGET method
2 save download data to filesystem 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 286 2015-08-03
3 output download data
<filename> file name to write data in mode 2. Alphanumeric ASCII text
string up to 64 characters.
<readPosition> position start read data in mode 3.
<readLength> read length in mode 3
<totalLength> The total length of data bytes have been download
<outputLength> total length will be output from serial port
<error> 85 An error related with file system.
 Other errors pls see FTPGET.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
Can not use this function when set FTPEXTPUT mode 1
12.2.27 AT+FTPFILEPUT Load File in RAM from File System then Upolad with
FTPPUT
AT+FTPFILEPUT Load File in RAM from File System then Upload with FTPPUT
Test Command
AT+FTPFILEPU
T=?
Response
OK
Response
If success:
OK
If error is related to ME functionality:
+CME ERROR: <err>
Write Command
AT+FTPFILEPU
T=<mode>[,filena
me]
Parameters
<mode>
0 not use FTPFILEPUT method
 1 use FTPFILEPUT method
<filename> file name to write data in mode 1. Alphanumeric ASCII text
string up to 64 characters.
<error> 85 An error related with file system.
 Other errors pls see FTPGET.
Parameter Saving
Mode
NO_SAVE
Max Response
Time
75 seconds(In case no response is received from server)
Reference Note
Can not use this function when set FTPEXTPUT mode 1. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 287 2015-08-03
12.2.28 AT+FTPQUIT Quit Current FTP Session
AT+FTPQUIT Quit Current FTP Session
Test Command
AT+FTPQUIT=?
Response
OK
Execution
Command
AT+FTPQUIT
Response
If success:
OK
If error is related to ME functionality:
+CME ERROR: <err>
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 288 2015-08-03
13 AT Commands for GSM Location Application
SIM800 series support GSM location operation.
13.1 Overview
Command Description
AT+CIPGSMLOC GSM location and time
13.2 Detailed Descriptions of Commands
13.2.1 AT+CIPGSMLOC GSM Location and Time
AT+CIPGSMLOC GSM Location and Time
Test Command
AT+CIPGSMLOC=
?
Response
+CIPGSMLOC: (1,2),(1-3)
OK
Parameters
See Write Command
Response
If <type>=1:
+CIPGSMLOC:<locationcode>[,<longitude>,<latitude>,<date>,<ti
me>]
OK
If <type>=2:
+CIPGSMLOC:<locationcode>[,<date>,<time>]
OK
If error is related to ME functionality:
+CME ERROR:<err>
Write Command
AT+CIPGSMLOC=
<type>,<cid>
Parameters
<type> 1 View the longitude, latitude and time
 2 View time
<cid> network parameters, refer to AT+SAPBR
<locationcode> 0 Success
 If the operation failed, the location code is not 0, such as:
404 Not Found 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 289 2015-08-03
408 Request Time-out
601 Network Error
602 No memory
603 DNS Error
604 Stack Busy
65535 Other Error
<longitude> Current longitude in degrees
<latitude> Current latitude in degrees
<date> Format is YYYY/MM/DD, the time zone is GMT E.g.
 2011/01/26
<time> Format is hh/mm/ss,the time zone is GMT.E.g. 06:10:46
Parameter Saving
Mode
NO_SAVE
Max Response Time 60 seconds
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 290 2015-08-03
14 AT Commands for Email Application
1. SIM800 series supports to send an Email with an attachment via SMTP protocol. It
also supports carbon copy (abbreviated Cc:) recipient and blind carbon copy
(abbreviated Bcc:) recipient.
2. SIM800 series supports to retrieve and delete the Email via POP3 protocol, the Email
may be with attachments.
3. SIM800 series supports all of POP3 commands but APOP. By these POP3 commands,
you can get the specific Email’s size and unique-id.
4. SIM800 series does not support that SMTP and POP3 operations are executed at the
same time.
14.1 Overview
Command Description
AT+EMAILCID Set Email bearer profile identifier
AT+EMAILTO Set timeout value of SMTP/POP3 server response
AT+SMTPSRV Set SMTP server address and port
AT+SMTPAUTH Set user name and password for SMTP authentication
AT+SMTPFROM Set sender address and name
AT+SMTPRCPT Set the Email recipient(to/cc/bcc) address and name
AT+SMTPSUB Set the Email subject
AT+SMTPBODY Set the Email body
AT+SMTPFILE Set the Email attachment
AT+SMTPSEND Send the Email
AT+SMTPFT Transfer the Email attachment
AT+SMTPCS Set the Email charset
AT+POP3SRV Set POP3 server and account
AT+POP3IN Log in POP3 server
AT+POP3NUM Get Email number and total size
AT+POP3LIST Get the specific Email size
AT+POP3UIDL Get the specific Email unique-id
AT+POP3CMD Get multi-line response
AT+POP3READ Read multi-line response
AT+POP3DEL Mark the specific Email to delete
AT+POP3RSET Unmark the emails that be marked as deleted
AT+POP3OUT Log out POP3 server 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 291 2015-08-03
14.2 Detailed Descriptions of Commands
14.2.1 AT+EMAILCID Set Email Bearer Profile Identifier
AT+EMAILCID Set Email Bearer Profile Identifier
Response
+EMAILCID: (range of supported <cid>s)
OK
Test Command
AT+EMAILCID=?
Parameters
See Write Command
Response
+EMAILCID: <cid>
OK
Read Command
AT+EMAILCID?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+EMAILCID=<c
id>
Parameters
<cid> bearer profile identifier refer to AT+SAPBR
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.2 AT+EMAILTO Set Timeout Value of SMTP/POP3 Server Response
AT+EMAILTO Set Timeout Value of SMTP/POP3 Server Response
Response
+EMAILTO: (range of supported <timeout>s)
OK
Test Command
AT+EMAILTO=?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 292 2015-08-03
Response
+EMAILTO: <timeout>
OK
Read Command
AT+EMAILTO?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+EMAILTO=<ti
meout>
Parameters
<timeout> The timeout value of SMTP/POP3 server response, in 1
second unit.
10-120 Default: 30(seconds)
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.3 AT+SMTPSRV Set SMTP Server Address and Port
AT+SMTPSRV Set SMTP Server Address and Port
Response
+SMTPSRV: <smtpServerLength>,(range of supported <smtpPort>s)
OK
Test Command
AT+SMTPSRV=?
Parameters
See Write Command
Response
+SMTPSRV: <smtpServer>,<smtpPort>
OK
Read Command
AT+SMTPSRV?
Parameter
See Write Command
Write Command
AT+SMTPSRV=
<smtpServer>[,<sm
tpPort>]
Response
OK
If error is related to ME functionality:
ERROR 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 293 2015-08-03
Parameters
<smtpServer> SMTP server address, string type. This parameter
can be either:
- IP address in the format: xxx.xxx.xxx.xxx
 - Host name to be solved with a DNS query
<smtpPort> The SMTP port
1-65535 Default: 25
<smtpServerLength> The max length of <smtpServer>
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.4 AT+SMTPAUTH Set User Name and Password for SMTP Authentication
AT+SMTPAUTH Set User Name and Password for SMTP Authentication
Response
+SMTPAUTH: (range of supported<authType>s),<userNameLength>,<passwordLength>
OK
Test Command
AT+SMTPAUTH=?
Parameters
See Write Command
Response
+SMTPAUTH: <authType>,<username>,<password>
OK
Read Command
AT+SMTPAUTH?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPAUTH=<
authType>[,<userNa
me>,<password>]
Parameters
<authType> The type of SMTP authentication
0 SMTP server does not request authentication.
<username> and <password> must not be given.
1 SMTP server requests authentication
<userName> The user name for SMTP authentication.
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 294 2015-08-03
<userNameLength> The max length of <userName>.
<password> The password for SMTP authentication.
<passwordLength> The max length of <password>.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.5 AT+SMTPFROM Set Sender Address and Name
AT+SMTPFROM Set Sender Address and Name
Response
+SMTPFROM: <senderAddressLength>,<senderNameLength>
OK
Test Command
AT+SMTPFROM=
?
Parameters
See Write Command
Response
+SMTPFROM: <senderAddress>,<senderName>
OK
Read Command
AT+SMTPFROM?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPFROM=
<senderAddress>[,<s
enderName>]
Parameters
<senderAddress> The Email sender address,string type.
<senderAddressLength> The max length of <senderAddress>
<senderName> The Email sender name,string type.
<senderNameLength> The max length of <senderName>
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 295 2015-08-03
14.2.6 AT+SMTPRCPT Set the Email Recipient(TO/CC/BCC) Address and Name
AT+SMTPRCPT Set the Email Recipient(TO/CC/BCC) Address and Name
Response
+SMTPRCPT: (range of supported <rcptType>s),(range of supported
<index>s),<rcptAddressLength>,<rcptNameLength>
OK
Test Command
AT+SMTPRCPT=?
Parameters
See Write Command
Response
[+SMTPRCPT: <rcptType>,<index>,<rcptAddress>,<rcptName>
[<CR><LF>+SMTPRCPT: <rcptType>,<index>,<rcptAddress>,
<rcptName>[…]]]
OK
Read Command
AT+SMTPRCPT?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPRCPT=<
rcptType>[,<index>
[,<rcptAddress>[,<r
cptName>]]]
Parameters
<rcptType> The type of recipient, the types of TO and CC are used to
construct e-mail header in the field:”To:” or “Cc:”.
0 TO, Normal Recipient.
1 CC, Carbon Copy recipient.
2 BCC, Blind Carbon Copy recipient.
<index> Index of the type of recipient, decimal format
<rcptAddress> The Email recipient address.
<rcptName> The Email recipient name.
<rcptAddressLength> The max length of <rcptAddress>.
<rcptNameLength> The max length of <rcptName>.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 If only <rcptType> is given, it will delete all items of <rcptType>.
 If only <rcptType> and <index> are given, it will delete the
<index> item of <rcptType>. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 296 2015-08-03
14.2.7 AT+SMTPSUB Set the Email Subject
AT+SMTPSUB Set the Email Subject
Response
+SMTPSUB: <subjectLength>
OK
Test Command
AT+SMTPSUB=?
Parameters
See Write Command
Response
+SMTPSUB: <subject>
OK
Read Command
AT+SMTPSUB?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPSUB=<su
bject>
Parameters
<subject> The Email subject, string type. It will be present in the
header of the Email sent by SMTP client in the field:
"Subject:"
<subjectLength> The max length of <subject>.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
If the Email charset is not ASCII,<subject> must be in hexadecimal
format.
14.2.8 AT+SMTPBODY Set the Email Body
AT+SMTPBODY Set the Email Body
Response
+SMTPBODY: <bodyLength>
OK
Test Command
AT+SMTPBODY=?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 297 2015-08-03
Response
DOWNLOAD
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPBODY=<
length>
,then type data as
Email body. When
body’s length equal
length, command is
over!
Parameters
<length> The length of Email body.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 If the Email charset is not ASCII, the body of Email must be in
hexadecimal format.
 After urc string "DOWNLOAD", User can input email’s body.
14.2.9 AT+SMTPFILE Set the Email Attachment
AT+SMTPFILE Set the Email Attachment
Response
+SMTPFILE: (range of <fileType>s),<fileNameLength>,(range of
<encodeType>s)
OK
Test Command
AT+SMTPFILE=?
Parameters
See Write Command
Response
+SMTPFILE: <fileType>,<fileName>,<encodeType>
OK
Read Command
AT+SMTPFILE?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPFILE=<fi
leType>[,<fileName>
,<encodeType>]
Parameters
<fileType> The type of the Email attachment.
0 no attachment
1 attach a txt file 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 298 2015-08-03
2 attach a binary file (bmp, mp3, video…)
<fileName> The name of the Email attachment.
<fileNameLength> The max length of <fileName>.
<encodeType> Content-Transfer-Encoding used for attachment
0 "7bit" means data all represented as short lines of US-ASCII
data
1 "base64" designed to represent arbitrary sequences of octets
in a form that need not be humanly readable
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 If a txt file (<fileType>=1) is attached, <encodeType> must be 0.
 If a binary file (<fileType>=2) is attached, <encodeType> must be
1.
14.2.10 AT+SMTPSEND Send the Email
AT+SMTPSEND Send the Email
Response
OK
Test Command
AT+SMTPSEND=?
Parameters
Response
OK
If error is related to ME functionality:
ERROR
If send successfully or not, return:
+SMTPSEND: <code>
Execution Command
AT+SMTPSEND
Parameters
<code> The result of sending Email.
1 The Email has been sent successfully.
61 Network error.
62 DNS resolve error
63 SMTP TCP connection error.
64 Timeout of SMTP server response
65 SMTP server response error
66 Not authentication
67 Authentication failed. SMTP user name or password may
be not right.
68 Bad recipient. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 299 2015-08-03
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.11 AT+SMTPFT Transfer the Email Attachment
AT+SMTPFT Transfer the Email Attachment
Response
OK
Test Command
AT+SMTPFT=?
Parameters
See Write Command
Response
When the URC below is reported, the attachment can be transferred:
+SMTPFT: 1,<maxLength>
If <reqLength> is not 0 and send data successfully:
+SMTPFT: 2,<cnfLength>
...... //Input data
OK
If <reqLength> is not 0 and send data unsuccessfully:
+SMTPFT: 2,<cnfLength>
...... //Input data
ERROR
If <reqLength> is 0,it indicates that transferring the attachment have
finished:
OK
If error is related to ME functionality:
ERROR
If some error occur:
+SMTPSEND: <code>
Write Command
AT+SMTPFT=<req
Length>
Parameters
<reqLength> Requested number of data bytes(0-<maxLength>) to
be transmitted
<cnfLength> Confirmed number of data bytes to be transmitted
<maxLength> The max length of data can be sent at a time. It depends 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 300 2015-08-03
on the network status.
<code> See AT+SMTPSEND
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
 <reqLength> can not be greater than <maxLength>.
 When “+SMTPFT: 1,<maxLength>” is reported, then use
AT+SMTPFT=<reqLength> to send data.
14.2.12 AT+SMTPCS Set the Email Charset
AT+SMTPCS Set the Email Charset
Response
+SMTPCS: <charsetLength>
OK
Test Command
AT+SMTPCS=?
Parameters
See Write Command
Response
+SMTPCS: <charset>
OK
Read Command
AT+SMTPCS?
Parameter
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+SMTPCS=<cha
rset>
Parameters
<charset> The Email charset, string type. It shows which charset
the subject and the body are encoded in. If <charset> is not
ASCII but UTF-8 or other, the subject and the body must be
in hexadecimal format (e.g. “TEST” should be converted to
“54455354”).
 The default charset is ASCII.
<charsetLength> The max length of <charset>.
Parameter Saving
Mode
NO_SAVE
Max Response Time - 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 301 2015-08-03
Reference Note
14.2.13 AT+POP3SRV Set POP3 Server and Account
AT+POP3SRV Set POP3 Server and Account
Response
+POP3SRV: <pop3ServerLength>,<userNameLength>,<passwordLength>,(range of supported <pop3Port>s)
OK
Test Command
AT+POP3SRV=?
Parameters
See Write Command
Response
+POP3SRV: <pop3Server>,<userName>,<password>,<pop3Port>
OK
Read Command
AT+POP3SRV?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
Write Command
AT+POP3SRV=<po
p3Server>,<userNa
me>,<password>[,<p
op3Port>]
Parameters
<pop3Server> POP3 server address, string type. This parameter can
 be either:
 - IP address in the format: xxx.xxx.xxx.xxx
 - Host name to be solved with a DNS query
<userName> The user name to log in POP3 server, string type.
<password> The password to log in POP3 server, string type.
<pop3Port> The port of POP3 server.
1-65535 Default: 110
<pop3ServerLength> The max length of <pop3Server>.
<userNameLength> The max length of <userName>.
<passwordLength> The max length of <password>.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 302 2015-08-03
14.2.14 AT+POP3IN Log in POP3 Server
AT+POP3IN Log in POP3 Server
Response
OK
Test Command
AT+POP3IN=?
Parameters
Response
OK
If error is related to ME functionality:
ERROR
If logging in POP3 server or not, return:
+POP3IN: <code>
Execution Command
AT+POP3IN
Parameters
<code> The result of logging in POP3 server
1 Log in POP3 server successfully
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
65 POP3 server response error
66 POP3 server rejects to log in
67 Incorrect user name
68 Incorrect user name or password
69 Timeout of read data
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.15 AT+POP3NUM Get Email Number and Total Size
AT+POP3NUM Get Email Number and Total Size
Response
OK
Test Command
AT+POP3NUM=?
Parameter 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 303 2015-08-03
Response
OK
If error is related to ME functionality:
ERROR
If POP3 server issues a positive response:
+POP3NUM: 1,<totalNumber>,<totalSize>
If POP3 server issues a negative response:
+POP3NUM: 0
If some error occur:
+POP3OUT: <code>
Execution Command
AT+POP3NUM
Parameters
<totalNumber> The Email number on the POP3 server, decimal
format.
<totalSize> The total size of all Email and the unit is in byte.
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.16 AT+POP3LIST Get the Specific Email Size
AT+POP3LIST Get the Specific Email Size
Response
+POP3LIST: (range of supported <msgNumber>s)
OK
Test Command
AT+POP3LIST=?
Parameter
See Write Command
Write Command
AT+POP3LIST=<m
sgNumber>
Response
OK
If error is related to ME functionality:
ERROR
If POP3 server issues a positive response:
+POP3LIST: 1,<msgNumber>,<size>
If POP3 server issues a negative response:
+POP3LIST: 0 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 304 2015-08-03
If some error occur:
+POP3OUT: <code>
Parameters
<msgNumber> The message number of Email.
<size> The size of Email <msgNumber> and the unit is in byte.
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.17 AT+POP3UIDL Get the Specific Email Unique-id
AT+POP3UIDL Get the Specific Email Unique-id
Response
+POP3UIDL: (range of supported <msgNumber>s)
OK
Test Command
AT+POP3UIDL=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
If POP3 server issues a positive response:
+POP3UIDL: 1,<msgNumber>,<uid>
If POP3 server issues a negative response:
+POP3UIDL: 0
If some error occur:
+POP3OUT: <code>
Write Command
AT+POP3UIDL=<
msgNumber>
Parameters
<msgNumber> The message number of Email .
<UID> The Email unique-id, the unique-id is an arbitrary 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 305 2015-08-03
server-determined string, consisting of 1 to 70 characters in
the range 0x21 to 0x7E, which uniquely identifies a message
within a maildrop and which persists across sessions.
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
14.2.18 AT+POP3CMD Get Multi-line Response
AT+POP3CMD Get Multi-line Response
Response
+POP3CMD: (range of supported <cmdType>s),(range of supporte
d<msgNumber>s),(range of supported <lineNumber>s)
OK
Test Command
AT+POP3CMD=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
If POP3 server issues a positive response:
+POP3CMD: 1
If POP3 server issues a negative response:
+POP3CMD: 0
If some error occur:
+POP3OUT: <code>
Write Command
AT+POP3CMD=<c
mdType>[,<msgNum
ber>[,lineNumber]]
Parameters
<cmdType> The values that supported POP3 user command
1 List command
The “List” command returns a multi-line “scan listing”. For
each message on the maildrop list of the server the POP3
service returns a line containing the message number and its
size in bytes. A final “dotline” will be printed at the end of the
“scan listing“. If there are no messages on the maildrop list of
the server, the POP3 service returns a positive response, i.e. It 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 306 2015-08-03
does not issue an error response, but the “scan listing” will be
empty. In either case, each scan listing will be finished by
so-called “dotline”, i.e. a new line with just a single dot.
<msgNumber> and <lineNumber> must not be given.
2 Uidl command
The “Uidl” command returns a multi-line “unique-id
Listing”. For each message on the maildrop list of the
Server the POP3 service returns a line containing the
message number and its unique-id. A final “dotline”
will be printed at the end of the “unique-id listing” If
there are no messages on the maildrop list of the server. The
POP3 service returns a positive response,
i.e. It does not issue an error response, but the “uniqueid listing” will be empty. In either case, each unique-id
listing will be finished by so-called “dotline”, i.e.a new
line with just a singledot. <msgNumber> and <lineNumber>
must not be given.
3 Top command
The command retrieves the number of lines of the message’s
body from the POP3 server’s maildrop list. The POP3 server
sends the headers of the message, the blank line separating
the headers from the body, and then the number of lines of the
message’s body. If the number of lines requested by The
POP3 client is greater than the number of lines
in the body, then the POP3 server sends the entire
message. If no such message exists on the server the POP3
service issues an error response to the user.
Each email will be finished by a so-called “dotline”,
i.e.a new line with just a single dot.
<msgNumber> and <lineNumber> must be given.
4 Retrieve command
The command retrieves the related message from the
POP3 server’s maildrop list. If no such message exists
on the server the POP3 service issues an error response to the
user. Each email will be finished by a so-called “dotline”, i.e.
a new line with just a single dot.
<msgNumber> must be given.
<msgNumber> The message number of Email.
<lineNumber> The number of lines of the message body.
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 307 2015-08-03
64 Timeout of POP3 server response
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
After sending these POP3 commands and POP3 server issuing a positive
response, you can get the response by AT+POP3READ.
14.2.19 AT+POP3READ Read Multi-line Response
AT+POP3READ Read Multi-line Response
Response
+POP3READ: (range of supported <reqLength>s)
OK
Test Command
AT+POP3READ=?
Parameters
See Write Command
Response
If the data of response not to be read completely:
+POP3READ: 1,<cnfLength>
If the data of response to be read completely:
+POP3READ: 2,<cnfLength>
If some data need to be read,the URC below is reported:
+POP3READ: 3,<dataLength>
If error is related to ME functionality:
ERROR
If some error occur:
+POP3OUT: <code>
Write Command
AT+POP3READ=<
reqLength>
Parameters
<reqLength> Requested number of data bytes (1-1460) to be read
<cnfLength> Confirmed number of data bytes to be read, which may
be less than <reqLength>. 0 indicates that no data can be
read.
<dataLength> Received number of data bytes.
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
69 Read data timeout
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 308 2015-08-03
Mode
Max Response Time -
Reference Note
 Other AT commands (but AT+POP3OUT) can not be executed
until the data of response are read completely.
 If <confLength> is less than <reqLength>, you should wait for a
URC “+POP3READ: 3,<dataLength>” reported. Then you may
continue to read data by AT+POP3READ.
 If the module has some unread data, the URC “+POP3READ:
 3,<dataLength>” is reported every once in a while. After so
me time, these data are not still read, the module will quit th
e POP3 process.
14.2.20 AT+POP3DEL Mark the Specific Email to Delete
AT+POP3DEL Mark the Specific Email to Delete
Response
+POP3DEL: (range of supported <msgNumber>s)
OK
Test Command
AT+POP3DEL=?
Parameters
See Write Command
Response
OK
If error is related to ME functionality:
ERROR
If POP3 server issues a positive response:
+POP3DEL: 1
If POP3 server issues a negative response:
+POP3DEL: 0
If some error occur:
+POP3OUT: <code>
Write Command
AT+POP3DEL=<m
sgNumber>
Parameters
<msgNumber> The message number of Email
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 309 2015-08-03
Max Response Time -
Reference Note
The POP3 server marks the Email as deleted. Any future reference to the
message-number associated with the Email in a POP3 command
generates an error. The POP3 server does not actually delete the Email
until the POP3 client logs out POP3 server and closes the session
normally.
14.2.21 AT+POP3RSET Unmark the Emails that Be Marked as Deleted
AT+POP3RSET Unmark the Emails that Be Marked as Deleted
Response
OK
Test Command
AT+POP3RSET=?
Parameter
Response
OK
If error is related to ME functionality:
ERROR
If POP3 server issues a positive response:
+POP3RSET: 1
If POP3 server issues a negative response:
+POP3REST: 0
If some error occur:
+POP3OUT: <code>
Execution Command
AT+POP3RSET
Parameters
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 310 2015-08-03
14.2.22 AT+POP3OUT Log Out POP3 Server
AT+POP3OUT Log Out POP3 Server
Response
OK
Test Command
AT+POP3OUT=?
Parameters
Response
OK
If error is related to ME functionality:
ERROR
If the process is completed, return:
+POP3OUT: <code>
Execution Command
AT+POP3OUT
Parameters
<code> The result of logging out POP3 server
1 Normally log out POP3 server
61 Network error
62 DNS resolve error
63 POP3 tcp connection error
64 Timeout of POP3 server response
69 Timeout of read data
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 311 2015-08-03
15 AT Commands for MMS Application
SIM800 series support MMS operation.
15.1 Overview
Command Description
AT+CMMSCURL Set the URL of the MMS center
AT+CMMSPROTO Set the protocol parameter and MMS proxy
AT+CMMSCID Set the network parameters for MMS
AT+CMMSSENDCFG Set the parameters for sending MMS
AT+CMMSEDIT Enter or exit edit mode
AT+CMMSDOWN Download the file data or title from UART
AT+CMMSDELFILE Delete the file of the edited MMS by file index
AT+CMMSSEND Start MMS sending
AT+CMMSRECP Add recipients
AT+CMMSCC Add copy recipients
AT+CMMSBCC Add secret recipients
AT+CMMSDELRECP Delete recipients
AT+CMMSDELCC Delete copy recipients
AT+CMMSDELBCC Delete secret recipients
AT+CMMSRECV Receive MMS
AT+CMMSVIEW Get the MMS into buffer and show the information
AT+CMMSREAD Read the given file of the MMS in the buffer
AT+CMMSRDPUSH Read the information of the MMS push message
AT+CMMSUA Set User Agent
AT+CMMSPROFILE Set User Agent Profile
AT+CMMSTIMEOUT Set MMS Timeout
AT+CMMSSTATUS Get MMS Status
AT+CMMSINIT Initialize MMS Function
AT+CMMSTERM Exit MMS function
AT+CMMSSCONT Save MMS context 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 312 2015-08-03
15.2 Detailed Descriptions of Commands
15.2.1 AT+CMMSCURL Set the URL of the MMS Center
AT+CMMSCURL Set the URL of the MMS Center
Test Command
AT+CMMSCURL=
?
Response
+CMMSCURL: “URL”
OK
Parameters
See Write Command
Response
+CMMSCURL: <mmscurl>
OK
Read Command
AT+CMMSCURL?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSCURL=
<mmscurl>
Parameters
<mmscurl> The URL of the MMS center.
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note
15.2.2 AT+CMMSPROTO Set the Protocol Parameter and MMS Proxy
AT+CMMSPROTO Set the Protocol Parameter and MMS Proxy
Response
+CMMSPROTO: “(0-255).(0-255).(0-255).(0-255)”,(1-65535)
OK
Test Command
AT+CMMSPROTO
=?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 313 2015-08-03
Response
+CMMSPROTO: <Gateway>,<Port>
OK
Read Command
AT+CMMSPROTO
?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSPROTO
=<Gateway>,<Port
>
Parameters
<Gateway> IP address of MMS proxy.
<Port> Port of MMS proxy.
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note
15.2.3 AT+CMMSCID Set the Network Parameters for MMS
AT+CMMSCID Set the Network Parameters for MMS
Response
+CMMSCID: (1-3)
OK
Test Command
AT+CMMSCID=?
Parameters
See Write Command
Response
+CMMSCID: <value>
OK
Read Command
AT+CMMSCID?
Parameters
See Write Command
Write Command
AT+CMMSCID=<v
alue>
Response
OK
or
ERROR
or 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 314 2015-08-03
+CME ERROR: <err>
Parameters
<value> network parameters, refer to AT+SAPBR
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note
15.2.4 AT+CMMSSENDCFG Set the Parameters for Sending MMS
AT+CMMSSENDCFG Set the Parameters for Sending MMS
Response
+CMMSSENDCFG: (0-6), (0-3),(0,1), (0,1),(0-2),(0-4),(1-2),(0,1)
OK
Test Command
AT+CMMSSENDC
FG=?
Parameters
See Write Command
Response
+CMMSSENDCFG:
<valid>,<pri>,<sendrep>,<readrep>,<visible>,<class>,<subctrl>,<no
tifrspcheck>
OK
Read Command
AT+CMMSSENDC
FG?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSSENDC
FG=<valid>[,<pri>[
,<sendrep>[,<readre
p>[,<visible>[,<class
>[,<subctrl>[,<notif
rspcheck>]]]]]]]
Parameters
<valid> The valid time of sent MMS
0 1 hour
1 12 hours
2 24 hours
3 2 days
4 1 week
5 maximum 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 315 2015-08-03
6 Not set (default)
<pri> Priority
0 lowest
1 normal
2 highest
3 Not Set (default)
<sendrep> Whether it need deliver report
0 No (default)
1 Yes
<readrep> Whether it need receive report
0 No (default)
1 Yes
<visible> Whether it need show the sender address
0 hide the sender address
 1 show the sender address even if it is a secret address
2 Not set (default)
<class> The class of the MMS
0 Personal
1 Advertisement
2 Informational
3 Auto
4 Not set (default)
<subctrl> Subject control
1 For Chinese character code
2 For English character code
<notifrspcheck> Whether it need to check the HTTP response of MMS
notifyrsp ind then to proceed the next step.
0 Waiting for HTTP response
1 Skip waiting for HTTP response
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note
15.2.5 AT+CMMSEDIT Enter or Exit Edit Mode
AT+CMMSEDIT Enter or Exit Edit Mode
Test Command
AT+CMMSEDIT=?
Response
+CMMSEDIT: (0,1)
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 316 2015-08-03
Parameters
See Write Command
Response
+CMMSEDIT: <mode>
OK
Read Command
AT+CMMSEDIT?
Parameters
See Write Command
Write Command
AT+CMMSEDIT=<
mode>
Response
OK
or
ERROR
or
+CME ERROR: <err>
Parameters
<mode> Whether it allows to edit MMS
0 Not allow to edit MMS
1 Allow to edit MMS
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
It includes adding and deleting receipt, downloading and deleting files,
downloading title to edit MMS.
15.2.6 AT+CMMSDOWN Download the File Data or Title from UART
AT+CMMSDOWN Download the File Data or Title from UART
Test Command
AT+CMMSDOWN
=?
Response
+CMMSDOWN: "PIC", (1-307200), (5000-),"NAME"
+CMMSDOWN: "TEXT", (1-15360), (2000-),"NAME"
+CMMSDOWN: "TITLE", (1-40), (2000-)
+CMMSDOWN: "AUDIO_ACC", (1-307200), (5000-),"NAME"
+CMMSDOWN: "AUDIO_AMR", (1-307200), (5000-),"NAME"
+CMMSDOWN: "AUDIO_BASIC", (1-307200), (5000-),"NAME"
+CMMSDOWN: "AUDIO_MID", (1-307200), (5000-),"NAME"
+CMMSDOWN: "AUDIO_MPEG", (1-307200), (5000-),"NAME"
+CMMSDOWN: "VIDEO_3GPP", (1-307200), (5000-),"NAME"
+CMMSDOWN: " VIDEO _MP4", (1-307200), (5000-),"NAME"
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 317 2015-08-03
Response
CONNECT
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSDOWN
=<type>,<size>,<tim
e>[,<name>]
Parameters
<type> A string parameter which indicates type of downloaded
data
 "TITLE" MMS title data
 "TEXT" MMS text data
 "PIC" MMS image data
"AUDIO_AAC" MMS aac audio data
"AUDIO_AMR" MMS amr audio data
"AUDIO_BASIC" MMS basic audio data
"AUDIO_MID" MMS mid audio data
"AUDIO_MPEG" MMS mpeg audio data
"VIDEO_3GPP" MMS 3gpp video data
"VIDEO_MP4" MMS mp4 video data
<size> Size in bytes of the data to be downloaded.
<time> Maximum time in milliseconds to download data.
<name> The file name of the image or the text to be downloaded,
including extended name. The default name for image is
"image<m>.jpg" and the default name for text is
"text<n>.txt". <m> and <n> are in the range of 0~255
Parameter Saving
Mode
NO_SAVE
Max Response Time Decided by <time>
Reference Note
 It is strongly recommended to set the time long enough to download
all the file data and make sure that the real size of the file to
download is not bigger than <size>.
 The maximum size of <name> is 40 Bytes and only ASCII code is
recognized for <name>.
15.2.7 AT+CMMSDELFILE Delete the File of the Edited MMS by File Index
AT+CMMSDELFILE Delete the File of the Edited MMS by File Index
Test Command
AT+CMMSDELFI
LE=?
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 318 2015-08-03
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSDELFI
LE=<fileIndex>
Parameters
<fileIndex> The index of the file to be deleted in the MMS. Refer to
"+CMMSVIEW"
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
This command is valid when it is allowed to edit MMS
15.2.8 AT+CMMSSEND Start MMS Sending
AT+CMMSSEND Start MMS Sending
Test Command
AT+CMMSSEND=
?
Response
+CMMSSEND: "ADDRESS"
OK
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSSEND=
<address>
Parameters
<address> a string parameter which indicates address of recipients.
Execution Command
AT+CMMSSEND
Response
OK
or
ERROR
or
+CME ERROR: <err>
Parameter Saving
Mode
NO_SAVE
Max Response Time AT+CMMSTIMEOUT
Reference Note
It is not allowed to input <address> when it not allowed to edit MMS 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 319 2015-08-03
15.2.9 AT+CMMSRECP Add Recipients
AT+CMMSRECP Add Recipients
Test Command
AT+CMMSRECP=
?
Response
+CMMSRECP: "ADDRESS"
OK
Response
+CMMSRECP: the list of <addr>s
OK
Read Command
AT+CMMSRECP?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSRECP=
<addr>
Parameters
<addr> a string parameter which indicates phone number or email
address of recipients. The maximum length of the string is
40.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
The maximum of recipients is 20 and this command is valid only when it
is allowed to edit MMS
15.2.10 AT+CMMSCC Add Copy Recipients
AT+CMMSCC Add Copy Recipients
Test Command
AT+CMMSCC=?
Response
+CMMSCC: "ADDRESS"
OK
Read Command
AT+CMMSCC?
Response
+CMMSCC: the list of <addr>s
OK
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 320 2015-08-03
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSCC=<ad
dr>
Parameters
<addr> a string parameter which indicates phone number or email
address of copy recipients. The maximum length of the
string is 40.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
The maximum of copy recipients is 20 and this command is valid only
when it is not allowed to edit MMS
15.2.11 AT+CMMSBCC Add Secret Recipients
AT+CMMSBCC Add Secret Recipients
Test Command
AT+CMMSBCC=?
Response
+CMMSBCC: "ADDRESS"
OK
Response
+CMMSBCC: the list of <addr>s
OK
Read Command
AT+CMMSBCC?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSBCC=<
addr>
Parameters
<addr> a string parameter which indicates phone number or email
address of secret recipients. The maximum length of the 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 321 2015-08-03
string is 40.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
The maximum of secret recipients is 20 and this command is valid only
when it is allowed to edit MMS
15.2.12 AT+CMMSDELRECP Delete Recipients
AT+CMMSDELRECP Delete Recipients
Test Command
AT+CMMSDELRE
CP=?
Response
+CMMSDELRECP: "ADDRESS"
OK
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSDELRE
CP=<addr>
Parameters
<addr> a string parameter which indicates phone number or email
address of recipient. The maximum length of the string is
40.
Execution Command
AT+CMMSDELRE
CP
Delete all the recipients
Response
OK
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
This command is valid when it is allowed to edit MMS
15.2.13 AT+CMMSDELCC Delete Copy Recipients
AT+CMMSDELCC Delete Copy Recipients
Test Command
AT+CMMSDELCC
Response
+CMMSDELCC: "ADDRESS" 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 322 2015-08-03
=?
OK
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSDELCC
=<addr>
Parameters
<addr> a string parameter which indicates phone number or
email address of copy recipients. The maximum length of
the string is 40.
Execution Command
AT+CMMSDELCC
Delete all the copy recipients
Response
OK
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
This command is valid when it is allowed to edit MMS
15.2.14 AT+CMMSDELBCC Delete Secret Recipients
AT+CMMSDELBCC Delete Secret Recipients
Test Command
AT+CMMSDELBC
C=?
Response
+CMMSDELBCC: "ADDRESS"
OK
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSDELBC
C=<addr>
Parameters
<addr> a string parameter which indicates phone number or
email address of secret recipient. The maximum length of
the string is 40.
Execution Command
AT+CMMSDELBC
C
Delete all the secret recipients
Response
OK
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 323 2015-08-03
Mode
Max Response Time -
Reference Note
This command is valid when it is allowed to edit MMS
15.2.15 AT+CMMSRECV Receive MMS
AT+CMMSRECV Receive MMS
Test Command
AT+CMMSRECV=
?
Response
+CMMSRECV: (range of <index>)
OK
Response
+CMMSRECV:
"<sender>","<time>","<subject>",<size><CR><LF>
list of <fileIndex,name,type,filesize><CR><LF>
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSRECV=
<index>
Parameters
<index> The index of the push message saved in the SIM message
box.
<sender> The address of the sender
<time> The time to receive the MMS
<subject> the title of the MMS
<size> The size of the MMS
<fileIndex,name,type,filesize> The index, name and size of every file
included in the MMS. The types are defined as following.
 2 text
 3 text/html
 4 text/plain
 5 image
 6 image/gif
 7 image/jpg
 8 image/tif
 9 image/png
 10 smil
Parameter Saving
Mode
NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 324 2015-08-03
Max Response Time AT+CMMSTIMEOUT
Reference Note
 This command is valid only when it is not allowed to edit MMS and
the buffer for MMS will be clear up. So it is recommended to save
the MMS in the buffer before receiving MMS.
 The received MMS is just saved in the buffer but not saved in the
flash.
 The maximum number of inclosure is 10.
15.2.16 AT+CMMSVIEW Get the MMS into Buffer and Show the Information
AT+CMMSVIEW Get the MMS into Buffer and Show the Information
Test Command
AT+CMMSVIEW=
?
Response
OK
Response
+CMMSVIEW: <mmstype>,"<sender>", "<receipts>", "<ccs>",
"<bccs>", "<datetime>","<subject>",<size><CR><LF>list of
<fileIndex, name, type, filesize><CR><LF>
OK
or
ERROR
or
+CME ERROR: <err>
Execution Command
AT+CMMSVIEW
Parameters
<mmstype> The type of MMS
0 Received MMS
1 Sent MMS
2 Unsent MMS
<sender> The address of th sender
<receipts> List of recipients, Separated by “;”
<ccs> List of copy recipients , Separated by “;”
<bccs> List of secret recipients , Separated by “;”
<datetime> The time of receive MMS
<subject> The title of MMS
<size> Data size of MMS
<fileIndex,name,type,filesize> The index, name and size of every file
included in the MMS. The types are defined as following.
 2 text
 3 text/html
 4 text/plain
 5 image 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 325 2015-08-03
 6 image/gif
 7 image/jpg
 8 image/tif
 9 image/png
 10 smil
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
15.2.17 AT+CMMSREAD Read the Given File of the MMS in the Buffer
AT+CMMSREAD Read the Given File of the MMS in the Buffer
Test Command
AT+CMMSREAD=
?
Response
OK
Response
+CMMSREAD: <name> <datSize>
File content
OK
Write Command
AT+CMMSREAD=
<fileIndex>
Parameters
<fileIndex> the index of the file to be read from the MMS in the
buffer，i.e. the parameter <fileIndex> in
“AT+CMMSRECV” and “AT+CMMSVIEW”
<name> the file name to be read
<datSize> the size of the file to be read
Parameter Saving
Mode
NO_SAVE
Max Response Time 5s
Reference Note
If the file type is text, the character set of the output text is Unicode little
endian without the header “FF FE”.
15.2.18 AT+CMMSRDPUSH Read the Information of the MMS PUSH Message
AT+CMMSRDPUSH Read the Information of the MMS PUSH Message
Test Command
AT+CMMSRDPUS
Response
+CMMSRDPUSH: (range of <index>) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 326 2015-08-03
H=?
OK
Response
+CMMSRDPUSH:
2,”<sender>”,”<subject>”,”<transaction>”,”<location>”,”<time>”,<
class>,<size>
OK
or
+CMMSRDPUSH: 6, “<receiver>”,”<time>”,<status>
OK
or
+CMMSRDPUSH: 255
OK
or
+CME ERROR: <err>
Write Command
AT+CMMSRDPUS
H=<index>
Parameters
The first parameter of the response should be 2 or 6, or the other type of
the MMS PDU.
2 m-notification-ind[2]. To inform the contents of a
received MMS
6 m-delivery-ind[2]. A delivery report
255 unknown MMS PDU
<index> The index of the push message saved in the SIM
message box.
<sender> The address of the sender
<receiver> The address of the receiver
<subject> The title of the MMS
<transaction> The X-Mms-Transation-ID[2] of the received MMS
<location> The X-Mms-Content-Location[2] of the received MMS
<class> The X-Mms-Class[2] of the received MMS
0 Personal
1 Advertisement
2 Informational
3 Auto
<time> Date and time of the received push message.
<size> The size of the MMS
<status> The status of the sent MMS
0 Expired
1 Retrieved
2 Rejected
3 Defered 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 327 2015-08-03
4 Unrecognized
Parameter Saving
Mode
NO_SAVE
Max Response Time 5s
Reference Note
 This command is valid only when it is not allowed to edit MMS and
the buffer for MMS will be clear up. So it is recommended to save
the MMS in the buffer before receiving MMS.
 The received MMS is just saved in the buffer but not saved in the
flash.
15.2.19 AT+CMMSUA Set User Agent
AT+CMMSUA Set User Agent
Response
+CMMSUA: "UserAgent"
OK
Test Command
AT+CMMSUA=?
Parameters
See Write Command
Response
+CMMSUA: <UA>
OK
Read Command
AT+CMMSUA?
Parameter
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSUA=<U
A>
Parameters
<UA> string type user agent name
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 328 2015-08-03
15.2.20 AT+CMMSPROFILE Set User Agent Profile
AT+CMMSPROFILE Set User Agent Profile
Response
+CMMSPROFILE: "UserAgentProfile"
OK
Test Command
AT+CMMSPROFI
LE=?
Parameters
See Write Command
Response
+CMMSPROFILE: <UAProfile>
OK
Read Command
AT+CMMSPROFI
LE?
Parameter
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSPROFI
LE=<UAProfile>
Parameters
<UAProfile> string type user agent profile
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note
15.2.21 AT+CMMSTIMEOUT Set MMS Timeout
AT+CMMSTIMEOUT Set MMS Timeout
Response
+CMMSTIMEOUT: (10-1000),(10-1000)
OK
Test Command
AT+CMMSTIMEO
UT=?
Parameters
See Write Command 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 329 2015-08-03
Response
+CMMSTIMEOUT: <Send timeout>,<Recv timeout>
OK
Read Command
AT+CMMSTIMEO
UT?
Parameters
See Write Command
Response
OK
or
ERROR
or
+CME ERROR: <err>
Write Command
AT+CMMSTIMEO
UT=<Send
timeout>,<Recv
timeout>>
Parameters
<Send timeout> Send timeout time, integer type, in seconds.
<Recv timeout> Receive timeout time, integer type, in seconds.
Parameter Saving
Mode
AT+CMMSSCONT
Max Response Time -
Reference Note
15.2.22 AT+CMMSSTATUS Get MMS Status
AT+CMMSSTATUS Get MMS Status
Response
OK
Test Command
AT+CMMSSTATU
S=?
Parameters
See Write Command
Response
+CMMSSTATUS:<status>
OK
or
ERROR
or
+CME ERROR: <err>
Read Command
AT+CMMSSTATU
S？
Parameters
<status> status of MMS action
MMS_IDLE
MMS_DOWNLOADING
MMS_DOWNLOADED 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 330 2015-08-03
MMS_SENDING
MMS_RECEIVING
MMS_RECEIVED
MMS_READING
MMS_READING_PUSH
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
15.2.23 AT+CMMSINIT Initialize MMS Function
AT+CMMSINIT Initialize MMS Function
Response
OK
Test Command
AT+CMMSINIT=?
Parameters
No Parameter
Response
OK
or
ERROR
or
+CME ERROR: <err>
Execution Command
AT+CMMSINIT
No Parameter
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
When first entering the MMS function, this command must be executed.
15.2.24 AT+CMMSTERM Exit MMS Function
AT+CMMSTERM Exit MMS Function
Test Command
AT+CMMSTERM=
?
Response
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 331 2015-08-03
Parameters
No Parameter
Response
OK
or
ERROR
or
+CME ERROR: <err>
Execution Command
AT+CMMSTERM
No Parameter
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
When exiting the MMS function, this command must be executed.
15.2.25 AT+CMMSSCONT Save MMS Context
AT+CMMSSCONT Save MMS Context
Response
OK
Test Command
AT+CMMSSCONT
=?
Parameters
See Execution Command
Response
+CMMSSCONT: <mode>
+CMMSCID: <value>
+CMMSCURL: <mmscurl>
+CMMSUA: <UA>
+CMMSPROFILE: <UAProfile>
+CMMSPROTO: <Gateway>,<Port>
+CMMSSENDCFG:<valid>,<pri>,<sendrep>,<readrep>,<visible>,<
class>,<subctrl>,<notifyskip>
+CMMSTIMEOUT: <Send timeout>,<Recv timeout>
OK
Read Command
AT+CMMSSCONT
?
Parameters
See Execution Command
Response
OK
Execution Command
AT+CMMSSCONT
Parameters 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 332 2015-08-03
<mode> 0 saved, the value from NVRAM
For other parameters, see the related command.
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 333 2015-08-03
16 AT Commands for DDET Application
DTMF detection can be set or activated by DDET command.
16.1 Overview
Command Description
AT+DDET DTMF detection control
16.2 Detailed Descriptions of Commands
16.2.1 AT+DDET DTMF Detection Control
AT+DDET DTMF Detection Control
Response
+DDET: (0,1),(0-10000),(0,1),(0,1)
OK
Test Command
AT+DDET=?
Parameters
See Write Command
Response
+DDET: <mode>,<interval>,<reportMode>,<ssdet>
OK
Read Command
AT+DDET?
Parameters
See Write Command
Response
OK
ERROR
Write Command
AT+DDET=<mo
de>[,<interval>][
,<reportMode>][
,<ssdet>]
Unsolicited Result Code
1)If <reoportMode> is set to 0
+DTMF: <key>
2)If <reportMode> is set to 1
+DTMF: <key>,<last time> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 334 2015-08-03
Parameters
<mode> disable or enable DTMF detection control
0 disable
1 enable
<interval> the min interval between two same key URC. The range is
0-10000, the default value is 0. unit is ms.
<reportMode> URC report mode
0 key value reported only
1 key value and last time are reported, the last time is in ms
<key> keytone detected, 1-9,*,#,A,B,C,D.if <ssdet> is 1,Single frequency
sound 1400 and 2300 is supported too, when single frequency 1400HZ
sound or 2300HZ sound is detected, +DTMF:1400 or +DTMF:2300 is
reported
<last time> duration of keytone playing. unit is ms.
<ssdet> single frequency sound detect function on off
 0 switch off
1 switch on
Parameter Saving
Mode
AT&W_SAVE
Max Response
Time
-
Reference Note
The parameters <interval> ,<reportMode> and <ssdet> can not power off
save 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 335 2015-08-03
17 AT Commands for RECORD Application
17.1 Overview
Command Description
AT+CREC Record operation
AT+CRECORD Record and send data to UART
17.2 Detailed Descriptions of Commands
17.2.1 AT+CREC Record Operation
AT+CREC Record Operation
Response
+CREC: (1-n),(1-10)
OK
Test Command
AT+CREC=?
Parameters
See Write Command
Response
+CREC: <status>
OK
Read Command
AT+CREC?
Parameters
<status> 0 idle state
1 recording state
2 playing state
Write Command
AT+CREC=<mo
de>,[<id>]
Response
OK
1) mode=1,start record
AT+CREC=1,<id>,<form>,[<time>][,<location>],[<quality>],[<input
path>]
OK
2) mode=2,stop record
AT+CREC=2
OK
+CREC: 2,<id>,<form>,<time>,<len> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 336 2015-08-03
3) mode=3,delete record
AT+CREC=3,<id>
OK
4) mode=4,play record file
AT+CREC=4,<id>,<channel>,<level>[,<repeat>]
OK
5) mode=5,stop play record file
AT+CREC=5
+CREC: 0
OK
6) mode=6,read record data
AT+CREC=6,<id>,<len>,<offset>
+CREC: 6,<id>,<len>
<data>
OK
7) mode=7,view record file infomation
AT+CREC=7,[<id>]
+CREC: 7,<id>,<len>,<form>
OK
8) mode=8,query free space for recording
 If SD card is supported
AT+CREC=8
+CREC: 8,sys:<len> sd:<len>
OK
 If SD card is not supported
AT+CREC=8
+CREC: 8,<len>
OK
9) mode=9, create record file directory.
 AT+CREC=9,<location>
OK

If error is related to ME functionality:
+CME ERROR: <err>
<err> 5000 Be recoding
5001 Be playing
5002 Audio busy
5003 No space 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 337 2015-08-03
5004 Format error
5005 File operation failure
5006 File is null
5007 File size is error
5008 File is not exist
Parameters
<n> number of operation support, if SD card is supported, the number
will be 9, or will be 8
<mode> 1 start record
2 stop record
3 delete record
4 play record
5 stop play record
6 get record data in hex format, the max length is 32K in bytes
7 list record files infomation
8 query free space in bytes
9 create record file direcotry
<id> file ID number, 1-10 or file path with double quotation marks, such
as "C:\User\1155165.amr".
<form> record file format
 0 AMR
1 WAV
2 WAV_ADPCM
<time> recording time limit. The recording will be stopped if the
recording time reaches the time limit, or there is a mistake/ memory
full/other events disturbed (call setup, etc.)/ Or manual operation.If 0 or
default value is set, no time limit is set.
<channel> channel
 0 main channel
 1 aux channel
<level> 0-100, play volume
<repeat> repeate
 0 play once
 1 play infinitely
<len> length in bytes. When read record data, the max length is 32K
<offset> offset of the record file , it is less than the length of reord file.
When read the record file, if the len+offset is larger than the file length, then
we need to return to the actural data length.
<data> record file data in hex format
<location> record file location
0 system FAT
1 SD card
<inputpath> input channel
 0 MIC1 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 338 2015-08-03
 1 MIC2
<quality> record quality
 0 low
 1 medium
 2 high
 3 best
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 Record will overwrite the record file with the same ID when free space
is enough，but overwrite the record file with the same ID and format
when free space is not enough.
 About 40K FAT space will remain for system use.
 The setting of input path doesn’t take effect when record in call.
 Play in call support low quality WAV record file.
 Location relative setting only take effect when SD card is support and
plugged in.
 When DDET is set to 1, record is not allowed in call.
 The value of parameter <id> of AT+CREC=7 can not support file path.
 The value of parameter <form> of AT+CREC=1 is invalid if the value
of <id> is file path. The record file format can get from file path.
 The max length of parameter <len> of AT+CREC=6 is 32K bytes.
 Scope of parameter <inputpath> is different among SIM800 series
project, please refer to chapter 21 for details.
17.2.2 AT+CRECORD Record and Send Data to UART
AT+CRECORD Record and Send Data to UART
Response
+CRECORD: (0,1)
OK
Test Command
AT+CRECORD
=?
Parameters
See Write Command
Write Command
AT+CRECORD
=<mode>[,<inter
val>][,<crcmode
>]
Response
OK
or
+CRECORD:<data>
or
ERROR 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 339 2015-08-03
Parameters
<data> UART data output in specified form, which is deciede by
<crcmode>
<mode>
0 stop record
1 start record
<interval> UART data output interval, the range is 1-50, the default value
is 50. unit is 20ms.
<crcmode> data form
0 UART data is the audio data
1 0x7E is added to the head, 0x7E is converted to 0x7D 0x5E, 0x7D is
converted to 0x7D 0x5D.
2 0x7E is added to the head, 0x7E is converted to 0x7D 0x5E, 0x7D is
converted to 0x7D 0x5D,a 2byte CRC code is added to the end
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 When AT+CRECORD is set to 1, data mode will be entered and audio
data will output on the UART every the interval time, any input on the
UART will stop the record. AT+CRECORD=0 take no effect.
 AMR 4.75K is supported only
 AMR file head “#*AMR\n” is not outputed
Note: Part of the projects support record function, please refer to chapter 21 for details. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 340 2015-08-03
18 AT Commands for TTS Application
18.1 Overview
Command Description
AT+CTTS TTS operation
AT+CTTSPARAM Set params of the TTS playing
AT+CTTSRING Enable/disable TTS play during incoming call ring
18.2 Detailed Descriptions of Commands
18.2.1 AT+CTTS TTS Operation
AT+CTTS TTS Operation
Response
OK
Test Command
AT+CTTS=?
No prameter
Response
+CTTS: <status>
OK
Read Command
AT+CTTS?
Parameters
<status> 0 idle mode
1 play mode
Response
if<mode>=0，response：
OK
if<mode>=1 or 2，response:
OK
+CTTS: 0 // speech played over

If error is related to MS functionality, response：
+CME ERROR: <err>
Write Command
AT+CTTS=<mo
de>[,<text>]
Parameters
<mode> 0 Stop playing speech
1 Start to play synthetic speech，<text> is in UCS2 coding
format.
2 Start to play synthetic speech， <text> is in ASCII coding
format.
Chinese text is in GBK coding format. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 341 2015-08-03
<text> The text which is synthetized to speech to be played, maximum
data length is 956 Bytes
Parameter Saving
Mode
NO_SAVE
Max Response
Time
-
Reference Note
 Call setup will stop the current tts play
 TTS can play in call, but call release will stop the tts play
 TTS play is not allowed when alert or ring
18.2.2 AT+CTTSPARAM Set Parameters of the TTS Playing
AT+CTTSPARAM Set Parameters of the TTS Playing
Response
+CTTSPARAM: (0-100),(0-3),(1-100),(1-100),(0,1)
OK
Test Command
AT+CTTSPARAM=
?
Parameters
See Write Command
Response
+CTTSPARAM: <volume>,<mode>,<pitch>,<speed>,<channel>
OK
Read Command
AT+CTTSPARAM?
Parameters
See Write Command
Response
OK
If error is related to MS functionality, response：
+CME ERROR: <err>
Write Command
AT+CTTSPARAM=
<volume>,<mode>,
<pitch>,<speed>[,<c
hannel>] Parameters
<volume> TTS playing volume, the range is 0-100,the default is 50.
<mode> TTS playing mode, the range is 0-3
0 auto read digit, and read digit based on number rule first
1 auto read digit, and read digit based on telegram rule first
2 read digit based on telegram rule
3 read digit based on number rule
<pitch> TTS playing pitch, the range is 1-100,the default is 50.
<speed> TTS playing speed, the range is 1-100,the default is 50.
<channel> TTS play channel.
0 main channel
1 aux channel
Parameter Saving NO_SAVE 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 342 2015-08-03
Mode
Max Response Time -
Reference Note
 TTS play channel setting take no effect in call. TTS play channel
depend on CHFA when in call.
 The default value of parameter <channel> is different among
SIM800 series projects, please refer to chapter 21 for details.
18.2.3 AT+CTTSRING Enable/Disable TTS Play During Incoming Call Ring
AT+CTTSRING Enable/Disable TTS Play During Incoming Call Ring
Response
+CTTSRING: (0,1)
OK
Test Command
AT+CTTSRING=?
Parameters
See Write Command
Response
+CTTSRING: <mode>
OK
Read Command
AT+CTTSRING?
Parameters
See Write Command
Response
OK
If error is related to MS functionality, response：
+CME ERROR: <err>
Write Command
AT+CTTSRING=<
mode>
Parameters
<mode> enable/disable TTS play during incoming call ring
0 diable TTS play during incoming call ring
1 enable TTS play during incoming call ring
Parameter Saving
Mode
NO_SAVE
Max Response Time -
Reference Note
If <mode> is set to 1, it is up to the customer to stop TTS play before
accept the call
Note: Part of the project supported TTS function, please refer to chapter 21 for details. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 343 2015-08-03
19 Supported Unsolicited Result Codes
19.1 Summary of CME ERROR Codes
Final result code +CME ERROR: <err> indicates an error related to mobile equipment or
network. The operation is similar to ERROR result code. None of the following commands in the
same Command line is executed. Neither ERROR nor OK result code shall be returned.
<err> values used by common messaging commands:
Code of <err> Meaning
0 phone failure
1 no connection to phone
2 phone-adaptor link reserved
3 operation not allowed
4 operation not supported
5 PH-SIM PIN required
6 PH-FSIM PIN required
7 PH-FSIM PUK required
10 SIM not inserted
11 SIM PIN required
12 SIM PUK required
13 SIM failure
14 SIM busy
15 SIM wrong
16 incorrect password
17 SIM PIN2 required
18 SIM PUK2 required
20 memory full
21 invalid index
22 not found
23 memory failure
24 text string too long
25 invalid characters in text string
26 dial string too long
27 invalid characters in dial string
30 no network service
31 network timeout
32 network not allowed - emergency call only 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 344 2015-08-03
40 network personalisation PIN required
41 network personalisation PUK required
42 network subset personalisation PIN required
43 network subset personalisation PUK required
44 service provider personalisation PIN required
45 service provider personalisation PUK required
46 corporate personalisation PIN required
47 corporate personalisation PUK required
99 resource limitation
100 unknown
103 Illegal MS
106 Illegal ME
107 GPRS services not allowed
111 PLMN not allowed
112 Location area not allowed
113 Roaming not allowed in this location area
132 service option not supported
133 requested service option not subscribed
134 service option temporarily out of order
148 unspecified GPRS error
149 PDP authentication failure
150 invalid mobile class
160 DNS resolve failed
161 Socket open failed
171 MMS task is busy now
172 The MMS data is oversize
173 The operation is overtime
174 There is no MMS receiver
175 The storage for address is full
176 Not find the address
177 The connection to network is failed
178 Failed to read push message
179 This is not a push message
180 gprs is not attached
181 tcpip stack is busy
182 The MMS storage is full
183 The box is empty
184 failed to save MMS 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 345 2015-08-03
185 It is in edit mode
186 It is not in edit mode
187 No content in the buffer
188 Not find the file
189 Failed to receive MMS
190 Failed to read MMS
191 Not M-Notification.ind
192 The MMS inclosure is full
193 Unknown
600 No Error
601 Unrecognized Command
602 Return Value Error
603 Syntax Error
604 Unspecified Error
605 Data Transfer Already
606 Action Already
607 Not At Cmd
608 Multi Cmd too long
609 Abort Cops
610 No Call Disc
611 BT SAP Undefined
612 BT SAP Not Accessible
613 BT SAP Card Removed
614 AT Not Allowed By Customer
753 missing required cmd parameter
754 invalid SIM command
755 invalid File Id
756 missing required P1/2/3 parameter
757 invalid P1/2/3 parameter
758 missing required command data
759 invalid characters in command data
765 Invalid input value
766 Unsupported mode
767 Operation failed
768 Mux already running
769 Unable to get control
770 SIM network reject
771 Call setup in progress 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 346 2015-08-03
772 SIM powered down
773 SIM file not present
791 Param count not enough
792 Param count beyond
793 Param value range beyond
794 Param type not match
795 Param format invalid
796 Get a null param
797 CFUN state is 0 or 4
19.2 Summary of CMS ERROR Codes
Final result code +CMS ERROR: <err> indicates an error related to message service or network.
The operation is similar to ERROR result code. None of the following commands in the same
Command line is executed. Neither ERROR nor OK result code shall be returned.
<err> values used by common messaging commands:
Code of <err> Meaning
1 Unassigned(unallocated) number
3 No route to destination
6 Channel unacceptable
8 Operator determined barring
10 Call barred
11 Reserved
16 Normal call clearing
17 User busy
18 No user responding
19 User alerting, no answer
21 Short message transfer rejected
22 Number changed
25 Pre-emption
26 Non-selected user clearing
27 Destination out of service
28 Invalid number format (incomplete number)
29 Facility rejected
30 Response to STATUS ENQUIRY
32 Normal, unspecified 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 347 2015-08-03
34 No circuit/channel available
38 Network out of order
41 Temporary failure
42 Switching equipment Congestion
43 Access information discarded
44 Requested circuit/channel not available
47 Resources unavailable, unspecified
49 Quality of service unavailable
50 Requested facility not subscribed
55 Requested facility not subscribed
57 Bearer capability not authorized
58 Bearer capability not presently available
63 Service or option not available, unspecified
65 Bearer service not implemented
68 ACM equal or greater than ACM maximum
69 Requested facility not implemented
70 Only restricted digital information bearer capability is available
79 Service or option not implemented, unspecified
81 Invalid transaction identifier value
87 User not member of CUG
88 Incompatible destination
91 Invalid transit network selection
95 Semantically incorrect message
96 Invalid mandatory information
97 Message type non-existent or not implemented
98 Message type not compatible with protocol state
99 Information element non-existent or not implemented
100 Conditional information element error
101 Message not compatible with protocol
102 Recovery on timer expiry
111 Protocol error, unspecified
127 Interworking, unspecified
128 Telematic interworking not supported
129 Short message Type 0 not supported
130 Cannot replace short message 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 348 2015-08-03
143 Unspecified TP-PID error
144 Data coding scheme (alphabet) not supported
145 Message class not supported
159 Unspecified TP-DCS error
160 Command cannot be acted
161 Command unsupported
175 Unspecified TP-Command error
176 TPDU not supported
192 SC busy
193 No SC subscription
194 SC system failure
195 Invalid SME address
196 Destination SME barred
197 SM Rejected-Duplicate SM
198 TP-VPF not supported
199 TP-VP not supported
208 SIM SMS storage full
209 No SMS storage capability in SIM
210 Error in MS
211 Memory Capacity Exceeded
212 SIM Application Toolkit Busy
213 SIM data download error
224 CP retry exceed
225 RP trim timeout
226 SMS connection broken
255 Unspecified error cause
300 ME failure
301 SMS reserved
302 operation not allowed
303 operation not supported
304 invalid PDU mode
305 invalid text mode
310 SIM not inserted
311 SIM pin necessary
312 PH SIM pin necessary
313 SIM failure 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 349 2015-08-03
314 SIM busy
315 SIM wrong
316 SIM PUK required
317 SIM PIN2 required
318 SIM PUK2 required
320 memory failure
321 invalid memory index
322 memory full
323 invalid input parameter
324 invalid input format
325 invalid input value
330 SMSC address unknown
331 no network
332 network timeout
340 no cnma ack
500 Unknown
512 SMS no error
513 Message length exceeds maximum length
514 Invalid request parameters
515 ME storage failure
516 Invalid bearer service
517 Invalid service mode
518 Invalid storage type
519 Invalid message format
520 Too many MO concatenated messages
521 SMSAL not ready
522 SMSAL no more service
523 Not support TP-Status-Report & TP-Command in storage
524 Reserved MTI
525 No free entity in RL layer
526 The port number is already registerred
527 There is no free entity for port number
528 More Message to Send state error
529 MO SMS is not allow
530 GPRS is suspended
531 ME storage full
532 Doing SIM refresh 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 350 2015-08-03
19.3 Summary of Unsolicited Result Codes
URC Description AT Command
+CCWA:
<number>,<type>,<class>[,<a
lpha>]
Indication of a call that is currently
waiting and can be accepted. AT+CCWA=1
+CLIP:
<number>,<type>,<subaddr>,
<satype>,<alphaId>,<CLI
validity>
The calling line identity (CLI) of the
calling party when receiving a mobile
terminated call.
AT+CLIP=1
+CRING: <type> Indicates incoming call to the TE if
extended format is enabled.
AT+CRC=1
+CREG: <stat>[,<lac>,<ci>] There is a change in the MT network
registration status or a change of the
network cell.
AT+CREG=<n>
+CCWV Shortly before the ACM (Accumulated
Call Meter) maximum value is reached.
The warning is issued approximately
when 5 seconds call time remains. It is
also issued when starting a call if less
than 5 s call time remains.
AT+CCWE=1
+CMTI: <mem3>,<index> Indicates that new message has been
received.
AT+CNMI
<mt>=1
+CMTI:
<mem3>,<index>,"MMS
PUSH"
Indicates that new MMS message has
been received.
AT+CNMI
<mt>=1
+CMT:
<length><CR><LF><pdu>
Indicates that new message has been
received.
AT+CNMI
<mt>=2 (PDU
mode)
+CMT:
<oa>,<scts>[,<tooa>,<fo>,<pi
d>,<dcs>,<sca>,<tosca>,
<length>]<CR><LF><data>
Indicates that new message has been
received.
AT+CNMI
<mt>=2 (text
mode)
+CBM:
<length><CR><LF><pdu>
Indicates that new cell broadcast
message has been received.
AT+CNMI
<bm>=2 (PDU
mode enabled):
+CBM:
<sn>,<mid>,<dcs>,<page>,<p
ages><CR><LF><data>
Indicates that new cell broadcast
message has been received.
AT+CNMI
<bm>=2 (text
mode enabled):
+CDS:
<length><CR><LF><pdu>
Indicates that new SMS status report has
been received.
AT+CNMI
<ds>=1 (PDU
mode enabled): 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 351 2015-08-03
+CDS:
<fo>,<mr>[,<ra>][,<tora>],<s
cts>,<dt>,<st>
Indicates that new SMS status report has
been received.
AT+CNMI
<ds>=1 (text mode
enabled):
+COLP:
<number>,<type>[,<subaddr>
,<satype>,<alphaId>]
The presentation of the COL (Connected
Line) at the TE for a mobile originated
call. AT+COLP=1
+CSSU: <code2> Presentation status during a mobile
terminated call setup or during a call, or
when a forward check supplementary
service notification is received.
AT+CSSN=<n>[,<
m>]<m>=1
+CSSI: <code1>[,<index>] Presentation status after a mobile
originated call setup
AT+CSSN=<n>[,<
m>]<n>=1
+CLCC:
<id1>,<dir>,<stat>,<mode>,<
mpty>[,<number>,<type
>,<alphaID>]
[<CR><LF>+CLCC:
<id2>,<dir>,<stat>,<mode>,<
mpty>
[,<number>,<type>,<alphaID
>][...]]
Report a list of current calls of ME
automatically when the current call
status changes.
AT+CLCC=1
*PSNWID: "<mcc>",
"<mnc>", "<full network
name>",<full network name
CI>, "<short network
name>",<short network name
CI>
Refresh network name by network.
*PSUTTZ:
<year>,<month>,<day>,<hour
>,<min>,<sec>, "<time
zone>",<dst>
Refresh time and time zone by network.
+CTZV: "<time zone>" Refresh network time zone by network.
DST: <dst> Refresh Network Daylight Saving Time
by network.
AT+CLTS=1
+CSMINS: <n>,<SIM
inserted>
Indicates whether SIM card has been
inserted.
AT+CSMINS=1
+CDRIND: <type> Indicates whether a CS voice call, CS
data has been terminated.
AT+CDRIND=1
+CHF: <state> Indicates the current channel. AT+CHF=1
+CENG:
<cell>,"<arfcn>,<rxl>,<rxq>,
<mcc>,<mnc>,<bsic>,<cellid
>,<rla>,<txp>,<lac>,<TA>"
Report of network information. AT+CENG=<mod
e>[,<Ncell>]
<mode>=2
MO RING Shows call state of mobile originated 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 352 2015-08-03
call: the call is alerted. AT+MORING=1
MO CONNECTED Shows call state of mobile originated
call: the call is established.
AT+MORING=1
+CPIN: <code> Indicates whether some password is
required or not.
+CPIN: NOT READY SIM Card is not ready.
+CPIN: NOT INSERTED SIM Card is not inserted.
AT+CPIN
+CSQN: <rssi>,<ber>
Displays signal strength and channel bit
error rate
when <rssi>,<ber>values change.
AT+EXUNSOL="
SQ",1
+SIMTONE: 0 The generated tone playing is stopped or
completed. AT+SIMTONE
+STTONE: 0 The SIM Toolkit tone playing is stopped
or completed. AT+STTONE
+CR: <serv>
An intermediate result code is
transmitted during connect negotiation
when the TA has determined the speed
and quality of service to be used, before
any error control or data compression
reports are transmitted, and before any
final result code (e.g. CONNECT)
appears.
AT+CR=1
+CUSD:
<n>[,<str_urc>[,<dcs>]]
Indicates an USSD response from the
network, or network initiated operation. AT+CUSD=1
RING An incoming call signal from network is
detected.
NORMAL POWER DOWN SIM800 is powered down by the
PWRKEY pin or AT command
“AT+CPOWD=1”.
+CMTE: <n> The module temperature is abnormal.
Refer to hardware document for details. AT+CMTE=1
UNDER-VOLTAGE
POWER DOWN
Under-voltage automatic power down.
UNDER-VOLTAGE
WARNNING
under-voltage warning
OVER-VOLTAGE POWER
DOWN
Over-voltage automatic power down.
OVER-VOLTAGE
WARNNING
over-voltage warning
CHARGE-ONLY MODE The module is charging by charger.
(require hardware support)
RDY Power on procedure is completed, and
the module is ready to operate at fixed
baud rate. (This URC does not appear
when auto-bauding function is active).
AT+IPR=<rate>
<rate> is not 0
Call Ready Module is powered on and phonebook
initialization procedure is over. AT+CIURC=1
SMS Ready Module is powered on and SMS 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 353 2015-08-03
initialization procedure is over.
+CFUN: <fun> Phone functionality indication (This
URC does not appear when
auto-bauding function is active).
AT+IPR=<rate>
<rate> is not 0
[<n>,]CONNECT OK TCP/ UDP connection is successful AT+CIPSTART
CONNECT TCP/UDP connection in channel mode is
successful
[<n>,]CONNECT FAIL TCP/UDP connection fails AT+CIPSTART
[<n>,]ALREADY
CONNECT
TCP/UDP connection exists AT+CIPSTART
[<n>,]SEND OK Data sending is successful
[<n>,]CLOSED TCP/UDP connection is closed
RECV FROM: <IP
ADDRESS>: <PORT>
shows remote IP address and port
(only in single connection mode)
AT+CIPSRIP=1
+IPD, <data
size>,<TCP/UDP>:<data>
display transfer protocol in IP header to
received data or not (only in single
connection mode)
AT+CIPHEAD
AT+CIPSHOWTP
+RECEIVE,<n>,<length> Received data from remote client (only
in multiple connection mode)
REMOTE IP: <IP
ADDRESS>
Remote client connected in
+CDNSGIP: 1,<domain
name>,<IP>[,<IP2>]
DNS successful AT+CDNSGIP
+CDNSGIP:0,<dns error
code>
DNS failed
+PDP: DEACT GPRS is disconnected by network
+SAPBR <cid>: DEACT The bearer based on IP connection of
SIMCom application is deactivated.
+HTTPACTION:
<Method>,<StatusCode>,<Da
taLen>
Indicates HTTP method, Status Code
responded by remote server and the
length of data got.
AT+HTTPACTIO
N=<Method>
+FTPGET:1,<res> FTPGET session AT+FTPGET=1
+FTPPUT:1,1,<maxlength> It is ready to upload data. AT+FTPPUT
+FTPPUT:1,<res> FTP return result AT+FTPPUT
+FTPDELE:1,<res> FTP delete session AT+FTPDELE
+FTPSIZE:1,<res>,<size> FTP size session AT+FTPSIZE
+FTPMKD:1,<res> FTP create directory (not supported for
all versions)
AT+FTPMKD
+FTPRMD:1,<res> FTP delete directory (not supported for
all versions)
AT+FTPRMD
+FTPLIST:1,<res> FTP list session (not supported for all AT+FTPLIST 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 354 2015-08-03
versions)
+CGREG:
<stat>[,<lac>,<ci>]
Network Registration Status AT+CGREG=<n>
ALARM RING
+CALV: <n>
Indicate expired alarm. AT+CALA=<time
>[,<n>[,<recurr>]]
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 355 2015-08-03
20 AT Commands Examples
20.1 Profile Commands
Demonstration Syntax Expect Result
The AT Command interpreter actively
responds to input.
AT OK
Display the product name and the
product release information.
ATI SIM800 R11.08
OK
Display product identification
information: the manufacturer, the
product name and the product revision
information.
AT+GSV SIMCOM_Ltd
SIMCOM_SIM800H
Revision:
1308B01SIM800H32
OK
Display current configuration, a list of
the current active profile parameters.
AT&V [A complete listing of the
active profile]
OK
Reporting of mobile equipment errors.
The default CME error reporting setting
is disabled. Switch to verbose mode
Displays a string explaining the error in
more details.
AT+CMEE=?
AT+CMEE?
AT+CSCS=?
AT+CSCS="TEST"
AT+CMEE=2
AT+CSCS="TEST"
+CMEE: (0-2)
OK
+CMEE: 1
OK
+CSCS:
("IRA","GSM","UCS2","HE
X","PCCP","PCDN","8859-
1")
OK
ERROR
OK
+CME ERROR: invalid
input value
Store the current configuration in
nonvolatile memory. When the board is
reset, the configuration changes from the
last session are loaded.
ATE0&W
AT
[Reset the board]
AT
OK
[No echo]
OK
[No echo]
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 356 2015-08-03
ATE1&W
AT
[No echo]
OK
[Echo on]
OK
Set the ME to minimum functionality AT+IPR？
AT+CFUN=0
AT+IPR = 115200
AT+IPR?
AT+CFUN=0
+IPR:0
OK
OK
+CPIN: NOT READY
OK
+IPR:115200
OK
OK
+CPIN: NOT READY
ME has entered full functionality mode AT+CFUN? +CFUN:1
OK
20.2 SIM Commands
Demonstration Syntax Expect Result
List available
phonebooks, and select
the SIM phonebook.
AT+CPBS=?
AT+CPBS="SM"
+CPBS:
("SM","ME","ON","FD")
OK
OK
Display the ranges of
phonebook entries and
list the contents of the
phonebook.
AT+CPBR=?
AT+CPBR=1,10
+CPBR: (1-250),40,14
OK
[a listing of phonebook contents]
OK
Write an entry to the
current phonebook.
AT+CPBW=,"13
918
18xxxx",129,"Da
niel"
AT+CPBR=1,10
OK
[a listing of phonebook contents]
OK
Find an entry in the AT+CPBF="Dani +CPBF:5, "13918186089",129,"Daniel" 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 357 2015-08-03
current phonebook
using a text search.
el"
OK
Delete an entry from
the current phonebook
specified by its position
index.
AT+CPBW=2
AT+CPBR=1,10
OK
[a listing of phonebook contents]
OK
Switch on engineering
mode
AT+CENG =1,1
AT+CENG?
OK
+CENG: 1,1
+CENG:
0,"0081,55,00,460,00,31,f9a1,08,05,1816,255"
+CENG: 1,"0014,40,15,f2a1,460,00,1816"
+CENG: 2,"0012,27,48,f411,460,00,1816"
+CENG: 3,"0565,23,55,f1a1,460,00,1816"
+CENG: 4,"0584,19,24,f1a3,460,00,1816"
+CENG: 5,"0027,17,13,f412,460,00,1816"
+CENG: 6,"0028,15,14,6253,460,00,1823"
OK
Switch on engineering
mode, and activate the
URC report of network
information
AT+CENG =2,1
AT+CENG?
OK
+CENG: 2,1
+CENG:
0,"0081,55,00,460,00,31,f9a1,08,05,1816,255"
+CENG: 1,"0014,42,15,f2a1,460,00,1816"
+CENG: 2,"0012,25,48,f411,460,00,1816"
+CENG: 3,"0565,21,55,f1a1,460,00,1816"
+CENG: 4,"0584,19,24,f1a3,460,00,1816"
+CENG: 5,"0027,17,13,f412,460,00,1816"
+CENG: 6,"0028,17,14,6253,460,00,1823"
OK
Switch on engineering
mode, and with limited
network information
AT+CENG =3,1
AT+CENG?
OK
+CENG: 3,1
+CENG: 0,"460,00,1816,f9a1,31,56"
+CENG: 1,"460,00,1816,f2a1,15,38"
+CENG: 2,"460,00,1816,f411,48,26"
+CENG: 3,"460,00,1816,f1a3,24,17"
+CENG: 4,"460,00,1816,f412,13,16"
+CENG: 5,"460,00,1823,6253,14,16"
+CENG: 6,"460,00,1816,f2c3,43,14" 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 358 2015-08-03
OK
Switch on engineering
mode, and with extern
information
AT+CENG =4,1
AT+CENG?
OK
+CENG: 4,1
//Dedicated mode:
+CENG:
0,"0081,47,00,460,00,31,f9a1,08,05,1816,00,-66,0,
0,64,7,64,0,0,0,EFR"
//Idle mode:
+CENG:
0,"0081,56,00,460,00,31,f9a1,08,05,1816,255,-57,
177,617,x,x,x,x,x,x"
+CENG: 1,"0014,35,15,f2a1,460,00,1816,91,531"
+CENG: 2,"0012,25,48,f411,460,00,1816,51,491"
+CENG: 3,"0565,24,55,f1a1,460,00,1816,45,485"
+CENG: 4,"0027,20,13,f412,460,00,1816,31,471"
+CENG: 5,"0584,20,24,f1a3,460,00,1816,29,469"
+CENG: 6,"0028,16,14,6253,460,00,1823,18,455"
OK
20.3 General Commands
Demonstration Syntax Expect Result
Display the current network operator
that the handset is currently registered
with.
AT+COPS? +COPS: 0,0,"CHINA
MOBILE"
OK
Display a full list of network operator
names.
AT+COPN +COPN: "20201",
"COSMO"
[skip a bit]
+COPN:
"901012","Maritime Comm
Partner AS"
OK
reduce its functionality. This will
deregister the handset from the network.
AT+IPR?
AT+CFUN=0
[wait for deregister]
ATD6241xxxx;
AT+CFUN=1
+IPR: 0
OK
OK
ERROR
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 359 2015-08-03
Request the IMSI AT+CIMI 460008184101641
OK
20.4 Call Control Commands
Demonstration Syntax Expect Result
Make a voice call ATD6241xxxx; OK
MS makes a voice call
Hang up a call ATH OK
Call dropped
Make a voice call using the last number
facility. The initial call is established and
then cancelled. The second call is made
using the previous dial string.
ATD6241xxxx;
ATH
ATDL
OK
OK
OK
Example of a MT voice call
Make MT voice call to MS.
ATA
ATH
RING
RING
OK[accept call]
OK[hang up call]
Call related to supplementary service:
AT+CHLD. This Command provides
support for call waiting functionality.
AT+CHLD=<N> Return
value:(0,1,1x,2,2x,3,4)
Terminate current call and accept waiting
call.
Establish a voice call from EVB, receive
an incoming call (incoming call accepts
waiting status), terminate active call and
accept incoming call. Note call waiting
must be active for this option – use
"AT+CCWA=1,1” before running this
demonstration.
AT+CCWA=1,1
ATD6241xxxx;
<RX incoming call>
AT+CHLD=1
OK
OK
RING
+CCWA: "62418148 ",
129,1,""
OK
<waiting call active>
Set current call to busy state and accept
waiting call.
Establish a voice call from EVB, receive
an incoming call (incoming call accepts
waiting status), place active call on hold
and switch to incoming call. Terminate
active call and switch back to original
call. Note call waiting must have been
previously enabled for this
demonstration to work.
ATD6241xxxx;
<RX incoming call>
AT+CHLD=2
AT+CHLD=1
RING
+CCWA: "1391818
6089",129,1,""
OK
<waiting call active other
call on hold>
OK
<incoming call terminated,
dialed number now active>
Switch between active and held calls.
Establish a voice call from EVB, receive
ATD6241xxxx; OK
RING 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 360 2015-08-03
an incoming call (incoming call accepts
waiting status), place active call on hold
and switch to incoming call. Switch
between both calls, placing each in the
hold state whilst the other is active
before terminating each one. This feature
relies on knowing each call’s ID. This is
done using the List Current Calls
(AT+CLCC) Command. A call’s ID is
required to switch between held and
active calls. Held calls are not
automatically resumed when all other
calls are terminated. They need to be
made active using the AT+CHLD=2x
Command. Note call waiting must have
been previously enabled for this
demonstration to work.
<RX incoming call>
AT+CHLD=2
AT+CHLD=21
AT+CLCC
AT+CHLD=22
AT+CHLD=12
AT+CHLD=11
+CCWA: "1391818
6089",129,1,""
OK
<incoming call activated,
original on hold>
OK
<original call activated,
incoming call held>
+CLCC:1,0,0,0,0,"62
418148",129,""
+CLCC:2,1,1,0,0, "139
18186089",129, ""
OK
<Note incoming call held
flag set>
OK
<original call held, incoming
call active>
OK
<terminate incoming call>
<terminate original call>
Send busy status to incoming waiting
caller.
Establish a voice call from EVB, receive
an incoming call (incoming call accepts
waiting status), send ‘busy’ status to
waiting mobile. Note call waiting must
have been previously enabled for this
demonstration to work.
ATD6241xxxx;
<RX incoming call>
AT+CHLD=0
OK
RING
+CCWA: "1391818
6089",129,1,""
OK
OK
<incoming call sent busy
msg, current call retained>
Drop all calls on hold.
Establish a voice call from EVB, receive
an incoming call (incoming call accepts
waiting status), switch to incoming call
and drop all waiting calls.
Note call waiting must have been
previously enabled for this
demonstration to work.
ATD6241xxxx;
<RX incoming call>
AT+CHLD=2
AT+CHLD=0
OK
RING
+CCWA: "1391818
6089",129,1,""
OK
<incoming call actived,
original on hold>
OK
<incoming call actived,
current call
terminate> 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 361 2015-08-03
20.5 SIM Toolkit Commands
Please refer to SIM800 Series_STK_Application Note.DOC
20.6 Audio Commands
Demonstration Syntax Expect Result
DTMF tones AT+CLDTMF=2,
"1,2,3,4,5"
OK
AT+CLDTMF=2,”A,B
,C,D,E,F”,50
OK
20.7 SMS Commands
Demonstration Syntax Expect Result
Set SMS system into text mode, as
opposed to PDU mode.
AT+CMGF=1 OK
Send an SMS to myself. AT+CSCS="GSM"
AT+CMGS="+861391
818xxxx"
>This is a test
<Ctrl+Z>
OK
+CMGS:34
OK
Unsolicited notification of the SMS
arriving
+CMTI: "SM",1
Read SMS message that has just arrived.
Note: the number should be the same as
that given in the +CMTI notification.
AT+CMGR=1 +CMGR: "REC UNREAD",
"+8613918186089", "","02
/01/30,20:40:31+00"
This is a test
OK
Reading the message again and change
the status to "READ” from ”UNREAD”
AT+CMGR=1 +CMGR: "REC READ",
"+8613918186089","",
"02/01/30,20:40:31+00"
This is a test
OK
Send another SMS to myself. AT+CMGS="+861391
818xxxx"
>Test again<Ctrl+Z>
+CMGS:35
OK
Unsolicited notification of the SMS
arriving
+CMTI: "SM",2
List all SMS messages. AT+CMGL="ALL" +CMGL: 1, "REC 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 362 2015-08-03
Note:”ALL” must be in uppercase. READ","+8613918186089",
"", "02/01/30,20:40:31+00"
This is a test
+CMGL: 2, "REC
UNREAD"," ",
"+8613918186089", ""
,"02/01/30,20:45:12+00"
Test again
OK
Delete an SMS message. AT+CMGD=1 OK
List all SMS messages to show message
has been deleted.
AT+CMGL="ALL" +CMGL: 2, "REC READ",
"+8613918186
089","","02/01/30,20:45:12+
00"
Test again
OK
Send SMS using Chinese characters AT+CSMP=17,167,2,
25
AT+CSCS="UCS2"
AT+CMGS="0031003
300390031003800310
038003x003x003x003
x"
>4E014E50<Ctrl+Z>
OK
OK
+CMGS:36
OK
20.8 GPRS Commands
Demonstration Syntax Expect Result
Establish a GPRS context. Setup modem driver
Setup dial up
connection with *99#
Run internet explorer
Should be able to surf the
web using Internet explorer. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 363 2015-08-03
There are two GPRS Service Codes for
the ATD Command: Value 88 and 99.
Establish a connection by service code
99.
Establish a connection by service code
99 and using CID 1
ATD*99#
ATD*99***1#
CONNECT
CONNECT
Check if the MS is connected to the
GPRS network
Detach from the GPRS network
Check if the MS is connected to the
GPRS network
AT+CGATT?
AT+CGATT=0
AT+CGATT?
+CGATT:1
OK
OK
+CGATT: 0
OK
Check the class of the MS AT+CGCLASS? +CGCLASS:B
OK
Establish a context using the terminal
equipment: defines CID 1
and sets the PDP type to IP, access
point name and IP address aren’t set.
AT+CGDCONT=1,
"IP","CMNET"
ATD*99#
OK
CONNECT
Cancel a context using the terminal
equipment
Pause data transfer and enter Command
mode by +++
Stop the GPRS data transfer
AT+CGDCONT=1,
"IP","CMNET"
ATD*99#
+++
ATH
OK
CONNECT
OK
OK
Reconnect a context using the terminal
equipment
Resume the data transfer
AT+CGDCONT=1,
"IP","CMNET"
ATD*99#
+++
ATO
OK
CONNECT
OK
CONNECT
*Quality of Service (QOS) is a special parameter of a CID which consists of several parameters
itself.
 The QOS consists of
The precedence class
The delay class
The reliability class 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 364 2015-08-03
The peak throughput class
The mean throughput class
And is decided in "requested QOS” and "minimum acceptable QOS”.
All parameters of the QOS are initiated by default value (=0) except the reliability class is 3. To
define a QOS use the AT+CGQREQ or AT+CGQMIN Command.
Overwrite the precedence class of
QOS of CID 1 and sets the QOS of
CID 1 to be present
AT+CGQREQ=1,0,0,3
,0,0
OK
Response: all QOS values of the
activated CID.
AT+CGQREQ? +CGQREQ: 1,0,0,3,0,0
+CGQREQ: 2,0,0,3,0,0
+CGQREQ: 3,0,0,3,0,0
OK
Set the QOS of CID 1 to not present.
Once defined, the CID can be activated.
AT+CGQREQ=1 OK
Activate CID 1, if the CID is already
active, the mobile returns OK at once.
If no CID is defined the mobile responds
+CME ERROR: invalid index.
Note: If the mobile is NOT attached
by AT+CGATT=1 before activating, the
attachment is automatically done by the
AT+CGACT Command.
AT+CGACT=1,1
AT+CGACT=1,3
OK
+CME ERROR: requested
service option not
subscribed.
Use the defined and activated CID
to get online. The mobile can be
connected using the parameters of
appointed CID or using default
parameter
AT+CGDATA="PPP",
1
CONNECT
The mobile supports Layer 2 Protocol (L2P) PPP only.
Note: If the mobile is NOT attached by AT+CGATT=1 and the CID is NOT activated before
connecting, attaching and activating is automatically done by the AT+CGDATA Command.
Some providers require using an APN to establish a GPRS connection. So if user uses the
Microsoft Windows Dial-Up Network and ATD*9… to connect to GPRS, user must provide the
context definition as part of the modem definition (Modem properties/Connection/Advanced…
/Extra settings.) As an alternative, user can define and activate the context in a terminal program
(e.g. Microsoft HyperTerminal) and then use the Dial-Up Network to send only the ATD
Command.
20.9 TCPIP Commands
Please refer to SIM800 Series_TCPIP_Application Note.doc 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 365 2015-08-03
20.10 IP Commands
Please refer to SIM800 Series_IP_Application Note.doc. Chapter 3.1 describles how to config
bearer contexts of HTTP and FTP applications.
20.11 PING Commands
Demonstration Syntax Expect Result
Ping Request AT+CGATT?
AT+CSTT=”CMNET”
AT+CIICR
AT+CIFSR
AT+CIPPING="www.
google.cn"
+CGATT: 1
OK
OK
OK
10.78.245.128
+CIPPING:1,"203.208.37.99
",70,239
+CIPPING:2,"203.208.37.99
",53,238
+CIPPING:3,"203.208.37.99
",60,239
+CIPPING:4,"203.208.37.99
",50,239
OK
Other Device Ping To The Module On the Modem：
AT+CGATT?
AT+CSTT=”CMNET”
AT+CIPBEIPING=1
(If on 6252 platform,
don’t need this at)
AT+CIICR
AT+CIFSR
On the Other
Device:
AT+CIPPING="10.78.
On the Modem：
+CGATT: 1
OK
OK
OK
OK
10.78.245.128
On the Other Device:
+CIPPING:1,"10.78.25.18",7
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 366 2015-08-03
25.18" 0,239
+CIPPING:2,"10.78.25.18",5
3,238
+CIPPING:3,"10.78.25.18",6
0,239
+CIPPING:4,"10.78.25.18",5
0,239
OK
IP Filter Setting AT+CIPFLT=1,1,
"198.211.19.12","255.
255.0.0"
AT+CIPFLT=1,,
"10.43.21.69","255.0.0
.0”
AT+CIPFLT=0,1
AT+CIPFLT=2
OK
OK
OK
OK
Set the Mode When Receiving an
IP Packet
AT+CIPCTL=0
AT+CIPCTL=1
AT+CIPCTL=2
OK
OK
OK
20.12 HTTP and FTP Commands
Please refer to SIM800 Series_IP_Application Note.doc
20.13 GSM Location Commands
Demonstration Syntax Expect Result
Activate bearer profile AT+SAPBR=3,1,"Con
type","GPRS"
AT+SAPBR=3,1,"AP
N","CMNET"
AT+SAPBR =1,1
AT+SAPBR=2,1
OK
OK
OK
+SAPBR: 1,1,"10.89.193.1"
OK
Get location AT+CIPGSMLOC=1, +CIPGSMLOC: 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 367 2015-08-03
1
AT+CIPGSMLOC=2,
1
0,121.354848,31.221402,201
1/01/26,02:41:06
OK
+CIPGSMLOC:
0,2011/01/26,03:12:58
OK
Deactivate bearer profile AT+SAPBR=0,1 OK
20.14 EMAIL Commands
Please refer to SIM800 Series_Email_Application Note.doc.
20.15 MMS Commands
Demonstration Syntax Expect Result
Initialization AT+CMMSINIT OK
Configuration AT+CMMSCURL=“m
msc.monternet.com”
AT+CMMSCID=1
AT+CMMSPROTO=“
10.0.0.172”,80
AT+CMMSSENDCF
G=6,3,0,0,2,4
OK
OK
OK
OK
Active bearer profile AT+SAPBR=3,1,"Con
type","GPRS"
AT+SAPBR=3,1,"AP
N","CMWAP"
AT+SAPBR=1,1
AT+SAPBR=2,1
OK
OK
OK
+SAPBR: 1,1,"10.89.193.1"
OK
Send MMS AT+CMMSEDIT=1
AT+CMMSDOWN=“
PIC”,12963,20000
OK
CONNECT
... ...
OK 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 368 2015-08-03
AT+CMMSDOWN=“
TITLE”,3,5000
AT+CMMSRECP=“1
3918181818”
AT+CMMSSEND
CONNECT
... ...
OK
OK
……
OK
Receive MMS
When received a MMS push
message,UART will output message,such
as “+CMTI: "SM",3,"MMS PUSH"”
AT+CMMSEDIT=0
AT+CMMSRECV=3
AT+CMGD=3
OK
+CMMSRECV:
"+8613818181818",
"2008-05-02, 03:38:12","",
26670
1, "image0.jpg",7,26625
OK
OK
Receive MMS when the MMS push
message is a concatenated message.
UART output messages:
+CMTI: "SM",1,"MMS PUSH",2,1
+CMTI: "SM",2,"MMS PUSH",2,2
+CMTI: "SM",1,"MMS PUSH"
AT+CMMSEDIT=0
AT+CMMSRECV=1
AT+CMGD=1
OK
+CMMSRECV:
"+85266097746","2009-04-1
5,10:41:21","",49
1,"text0.txt",4,7
OK
OK
Read a file of MMS AT+CMMSREAD=1 +CMMSREAD:
"image0.jpg", 26625
……
OK
Exit MMS function AT+CMMSTERM OK
20.16 DDET Commands
Demonstration Syntax Expect Result
enable DTMF detection AT+DDET=1,0,0
//start DDET, interval
is 0, report mode is 0
OK
Set up a call connection ATD***********; OK
If module detected DTMF,
URC will be reported via
serial port 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 369 2015-08-03
+DTMF:1
 //report DTMF value
+DTMF:2
+DTMF:3
Receive an incoming call ATA OK
If module detected DTMF,
URC will be reported via
serial port
+DTMF:1
 //report DTMF value
+DTMF:2
+DTMF:3
+DTMF:4
enable DTMF detection AT+DDET=1,1000,1
//start DDET, interval
is 1000ms, report
mode is 1
OK
Set up a call connection ATD***********; OK
If module detected DTMF,
URC will be reported via
serial port, the minimal
interval between two identic
DTMF is 1000ms.
+DTMF:1,160
 //report DTMF value
and last time
+DTMF:2,300
+DTMF:3,200
Receive an incoming call ATA OK
If module detected DTMF,
URC will be reported via
serial port
+DTMF:1,160 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 370 2015-08-03
 //report DTMF value
and last time
+DTMF:2,300
+DTMF:3,200
20.17 RECORD Commands
Demonstration Syntax Expect Result
Start record AT+CREC=1,1,0
//start record
OK
// the record id is 1, format is
AMR
Stop record AT+CREC=2
//stop record
OK
+CREC: 2,1,0,15,16386
//URC will be reported after
stopping, which indicate the
format,including record id,
time in seconds, length in
bytes
Delete record AT+CREC=3,1
//delete record with id
1
OK
Play record file AT+CREC=4,1,0,80
//play record file,
channel is 0, the
volume is 80
OK
Stop play record file AT+CREC=5
//stop play record file
+CREC: 0
OK
//URC is reported to show
statues IDLE
Get record status AT+CREC？
//get record status
+CREC:2
OK
//Rrecording ,delete and
other play operations are not
allowed when playing
List record file information AT+CREC=7
//list record file list
+CREC: 7,1,7728,0
+CREC: 7,2,53820,1
OK
// two record file, one Is 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 371 2015-08-03
Get record file data AT+CREC=6,1,200,0
//get 200 bytes from
record file with offset 0
to file head
+CREC: 6,1,200
2321414D520A04923231D8
28E7B0E222B6D0B604941
AEC23377C8A442AFC934
40450E0133334D31577CB8
E88FE0450A54AD57AC23
086C24529FC0422434276A
B0E88DCF481E23A0419F0
50336489D54CB57224B004
2119466B5B5521D542FF35
4204C0422385A00B20DBC
67DC322049D87084889706
30CECBFE40004C0892EF5
914BD62A234C0B5804334
110F8818197ECA9D7F02E
046EDAD5EBA75928D948
FBB19E046EAF1C3A90168
351C302DF8804460C1409B
18966E0187F88B404CA88F
4F891BFE72BCF45D7
OK
//data in Hex format
Query free space AT+CREC=8
//query free memory
space
+CREC: 8,938600
OK
//the free memory space is
938600 bytes
Create record file directory AT+CREC=9,0
//create record file
directory on system
FAT
OK
20.18 TTS Commands
Demonstration Syntax Expect Result
Play synthetic speech with UCS2 coding
text
AT+CTTS=1,"6B228F
CE4F7F75288BED97
F3540862107CFB7E
DF"
// text in UCS2 coding
format，context of the
text is “欢迎使用语音
OK
//speech synthetized
successfully, played locally.
+CTTS:0
//speech played over Note:
User needs to wait
thisresponse to play next 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 372 2015-08-03
合成系统”. speech!
Play synthetic speech with ASCII coding
text
AT+CTTS=2,"hello ，
欢迎使用语音合成系
统"
// text in ASIIC coding
format.Chinese in
GBK coding format.
OK
//speech synthetized
Successfully played locally.
+CTTS:0
//speech played over. Note:
User needs to wait
thisresponse to play next
speech!
Stop playing TTS AT+CTTS=0
//Stop playing
synthetic speech
OK
//speech played over.
Set parameters of the TTS playing AT+CTTSPARAM=5
0, 0,50,25,1
// set params of the
TTS playing
OK
// set params over.
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 373 2015-08-03
21 ATC Differences among SIM800 Series
21.1 AT+SIDET
SIM800V, SIM840V,SIM800W,
SIM840W,SIM800W16,SIM840W16
SIM800H,SIM800L,SIM800,SIM800M64,
SIM808,SIM800C,SIM800A,SIM800F,
SIM800C-DS
AT+SIDET=?
+SIDET: (0,1),(0-16)
OK
AT+SIDET=?
If it is SIM800, SIM800M64,SIM800C,
SIM800A,SIM800F
+SIDET: (0, 2 ),(0-16)
OK
If it is SIM800H, SIM800L, SIM808 or
SIM800C-DS
+SIDET: (0-3),(0-16)
OK
Difference:
21.2 AT+CMIC
SIM800V, SIM840V,SIM800W,
SIM840W,SIM800W16,SIM840W16
SIM800H,SIM800L,SIM800,SIM800M64,
SIM808,SIM800C,SIM800A,SIM800F,
SIM800C-DS
AT+CMIC=?
+CMIC: (0,1),(0-15)
OK
AT+CMIC=?
If it is SIM800, SIM800M64,SIM800C,
SIM800A,SIM800F
+CMIC: (0, 2 ),(0-15)
OK
If it is SIM800H, SIM800L, SIM808 or
SIM800C-DS
+CMIC: (0-3),(0-15)
OK
Difference:
The default gain level of main audio channel is 10.
The default gain level of aux audio channel is 11 in SIM800H, SIM800L, SIM808 and 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 374 2015-08-03
SIM800C-DS.
The default gain level of aux audio channel is 9 in SIM800V, SIM840V, SIM800W, SIM840W,
SIM800W16 and SIM840W16.
The default gain level of aux audio channel is 8 in SIM800C, SIM800A and SIM800F.
21.3 AT+CBAND
SIM800V, SIM800W,SIM800W16,SIM800A SIM840V,SIM840W,SIM840W16,SIM800H,SI
M800L, SIM800,SIM800M64,SIM800G,
SIM808,SIM800C,SIM800F,SIM800C-DS
AT+CBAND=?
+CBAND:
(EGSM_MODE,DCS_MODE,EGSM_DCS
_MODE,ALL_BAND)
OK
AT+CBAND=?
+CBAND:
(EGSM_MODE,DCS_MODE,GSM850_MOD
E,PCS_MODE,EGSM_DCS_MODE,GSM850
_PCS_MODE,EGSM_PCS_MODE,ALL_BAN
D)
OK
Difference:
SIM840V, SIM840W, SIM840W16,SIM800H, SIM800L, SIM800, SIM800M64, SIM800G,
SIM808, SIM800C, SIM800F and SIM800C-DS support Quad-band.
21.4 AT+CHFA
SIM800V, SIM840V,SIM800W,
SIM840W,SIM800W16,SIM840W16
SIM800H,SIM800L,SIM800,SIM800M64,
SIM808,SIM800C,SIM800A
AT+CHFA=?
+CHFA: (0 = NORMAL_AUDIO, 1 =
AUX_AUDIO)
OK
AT+CHFA=?
If it is SIM800 and SIM800M64
+CHFA: (0 = NORMAL_AUDIO, 2 =
HANDFREE_AUDIO,4=PCM_AUDIO)
OK
If it is SIM800H,SIM800L, SIM808 or
SIM800C-DS
+CHFA: (0 = NORMAL_AUDIO, 1 =
AUX_AUDIO, 2 = HANDFREE_AUDIO,
3 = AUX_HANDFREE_AUDIO, 4 =
PCM_AUDIO)
OK
If it is SIM800C,SIM800A,SIM800F
+CHFA: (0 = NORMAL_AUDIO, 2 = 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 375 2015-08-03
HANDFREE_AUDIO)
OK
Difference:
In SIM800H, SIM800L, SIM808 and SIM800C-DS, channel 2 is the same with channel 0,
channel 3 is the same with channel 1.channel 4 is multiplexed.
SIM800G can not support this AT command.
21.5 AT+SGPIO
SIM800V, SIM840V,SIM800W,
SIM840W,SIM800W16,SIM840W16
SIM800H,SIM800L,SIM800,
SIM808,SIM800M64
AT+SGPIO=?
+SGPIO: (0-1),(1-11),(0-1),(0-1)
OK
AT+SGPIO=?
+SGPIO: (0-1),(1-7),(0-1),(0-1)
OK
Difference:
GPIO4 and GPIO5 only support the read operation in SIM800H, SIM800L, SIM800,
SIM800M64 and SIM808.
SIM800, SIM800M64 and SIM808 do not support GPIO1.
SIM800G and SIM800C, SIM800A, SIM800F and SIM800C-DS can not support this
command.
21.6 AT+SJDR
Jamming detection PIN takes effect only in SIM800H, SIM800L, SIM800, SIM800M64,
SIM808, SIM800C, SIM800A, SIM800F and SIM800C-DS.The Jamming detection PIN is
defined as follows.
Module Type Jamming detection PIN
SIM800H/SIM800L PIN5
SIM800/SIM800M64 PIN67
SIM808 PIN63
SIM800C PIN29
SIM800A PIN67
SIM800F PIN67
SIm800C-DS PIN29
SIM800V, SIM840V, SIM800W, SIM840W, SIM800W16 and SIM840W16 have no jamming
detection PIN to indicate JD status, only report jamming status via URC from serial port. 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 376 2015-08-03
21.7 AT+CREC
Play in call support AMR format in SIM800H, SIM800, SIM800M64, SIM808, SIM800C,
SIM800A, SIM800F and SIM800C-DS.
The value of parameter <inputpath> is only "0" in SIM800 and SIM800M64.
21.8 AT+CTTSPARAM
SIM800V,SIM840V, SIM800W,
SIM840W,SIM800W16,SIM840W16
SIM800H,SIM800,SIM800M64
AT+CTTSPARAM?
+CTTSPARAM: 50,0,50,50,1
OK
AT+CTTSPARAM?
+CTTSPARAM: 50,0,50,50,0
OK
Difference:
Default value of output channel is different.
21.9 AT+CADC
SIM800V, SIM840V,SIM800W,SIM840W,
SIM800W16,SIM840W16,SIM800H,
SIM800L,SIM800,SIM800M64,SIM800C,
SIM800A,SIM800F,SIM800C-DS
SIM808
AT+CADC?
+CADC: 1,603
OK
AT+CADC?
+CADC: 1,958
+CADC: 1,2223
OK
Difference:
SIM808 has two ADC channels and others have only one ADC channel.
21.10 AT+CSCLK
SIM800V, SIM840V,SIM800W,SIM840W,
SIM800W16,SIM840W16,SIM800H,
SIM800L,SIM800,SIM800M64,SIM800C,
SIM800A,SIM800F,SIM800C-DS
SIM808
AT+CSCLK=?
+CSCLK: (0-2)
AT+CSCLK=?
+CSCLK: (0-1) 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 377 2015-08-03
OK OK
Difference:
SIM808 does not support AT+CSCLK=2.
21.11 AT+CMMSDOWN
SIM800V, SIM840V, SIM800W, SIM840W,
SIM800W16,SIM840W16,SIM800L,SIM80
0H, SIM800, SIM800M64, SIM800G,
SIM800C-DS
SIM808,SIM800C,SIM800A,SIM800F
AT+SGPIO=?
+CMMSDOWN: "PIC", (1-307200),
(5000-),"NAME"
+CMMSDOWN: "TEXT", (1-15360),
(2000-),"NAME"
+CMMSDOWN: "TITLE", (1-40), (2000-)
OK
AT+CMMSDOWN=?
+CMMSDOWN: "PIC", (1-307200),
(5000-),"NAME"
+CMMSDOWN: "TEXT", (1-15360),
(2000-),"NAME"
+CMMSDOWN: "TITLE", (1-40), (2000-)
+CMMSDOWN: "AUDIO_ACC", (1-307200),
(5000-),"NAME"
+CMMSDOWN: "AUDIO_AMR", (1-307200),
(5000-),"NAME"
+CMMSDOWN: "AUDIO_BASIC",
(1-307200), (5000-),"NAME"
+CMMSDOWN: "AUDIO_MID", (1-307200),
(5000-),"NAME"
+CMMSDOWN: "AUDIO_MPEG",
(1-307200), (5000-),"NAME"
+CMMSDOWN: "VIDEO_3GPP", (1-307200),
(5000-),"NAME"
+CMMSDOWN: " VIDEO _MP4", (1-307200),
(5000-),"NAME"
OK
21.12 AT+CFGRI
SIM800V, SIM840V, SIM800W, SIM840W,
SIM800W16,SIM840W16,SIM800L,SIM80
0H, SIM800, SIM800M64, SIM800G,
SIM800C-DS
SIM808, SIM800C, SIM800A, SIM800F
AT+CFGRI?
+CFGRI: 0
AT+CFGRI?
+CFGRI: 2 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 378 2015-08-03
OK OK
Difference:
Default value is different.
21.13 Only Part of Projects Support Following AT Commands
Chapter AT command or function Supported by project
2.2.5 ATD><str> SIM800V, SIM840V, SIM800W, SIM840W,
SIM800W16, SIM840W16, SIM800L, SIM800H,
SIM800, SIM800M64, SIM800G, SIM808, SIM800C,
SIM800A, SIM800F
2.2.39 AT+ICF SIM800V,SIM840V,SIM800W,SIM840W,SIM800W16,
SIM840W16,SIM800L,SIM800H,SIM800,
SIM800M64,SIM800G,SIM808
3.2.4 AT+CBST SIM800V,SIM840V,SIM800W,SIM840W,SIM800W16,
SIM840W16,SIM800L,SIM800H,SIM800,
SIM800M64,SIM800G,SIM808
6.2.10 AT+CMOD SIM800V,SIM840V,SIM800W,SIM840W,SIM800W16,
SIM840W16,SIM800L,SIM800H,SIM800,
SIM800M64,SIM800G,SIM808
6.2.40 AT+SGPIO SIM800V,SIM840V,SIM800W,SIM840W,SIM800W16,
SIM840W16,SIM800L,SIM800H,SIM800,
SIM800M64,SIM800G,SIM808
6.2.41 AT+SPWM SIM800V,SIM840V,SIM800W,SIM840W,SIM800W16,
SIM840W16,SIM800L,SIM800H,SIM800,
SIM800M64,SIM800G,SIM808
6.2.59 AT+CPCMCFG SIM800H,SIM800L,SIM800,SIM800M64,SIM808
6.2.60 AT+CPCMSYNC SIM800H,SIM800L,SIM800, SIM800M64,SIM808
6.2.61 AT+CANT SIM800H,SIM800L,SIM800,
SIM800M64,SIM808,SIM800C,SIM800A,SIM800F
6.2.63 AT+SD2PCM SIM800H,SIM800L,SIM800, SIM800M64,SIM808
6.2.64 AT+SKPD SIM800H,SIM800L,SIM800, SIM800M64,SIM808
6.2.68 AT+CMNRP SIM800H,SIM800L,SIM800, SIM800M64
6.2.69 AT+CEGPRS SIM800H,SIM800L,SIM800, SIM800M64,SIM800C-DS
6.2.74 AT+ECHARGE SIM808
6.2.75 AT+SIMTIMER SIM800H,SIM800L,SIM800, SIM800G
6.2.76 AT+SPE SIM800H, SIM800L,SIM800, SIM800G
6.2.77 AT+CCONCINDEX SIM808,SIM800C,SIM800A, SIM800F 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 379 2015-08-03
6.2.78 AT+SDMODE SIM808
6.2.79 AT+SRSPT SIM800H,SIM800L,SIM800,SIM800G,SIM808,SIM800
C, SIM800A,SIM800F
10.2.4 AT+CIPBEIPING SIM800H, SIM800L,SIM800, SIM800M64,SIM808,
SIM800C,SIM800A,SIM800F,SIM800C-DS
11.2.9 AT+HTTPHEAD SIM800H,SIM800L,SIM800,SIM800G
17 Record function SIM800V, SIM840V, SIM800W, SIM840W, SIM800H,
SIM800, SIM800M64, SIM808,SIM800C,SIM800A,
SIM800F,SIM800C-DS
18 TTS function SIM800V,SIM840V, SIM800W, SIM840W,SIM800H,
SIM800,SIM800M64,SIM800C
Note: SIM800H,SIM800 and SIM800C only support
Chinese TTS.
19 AT commands of AOC SIM800V,SIM840V,SIM800W,SIM840W,SIM800W16,
SIM840W16,SIM800L,SIM800H,SIM800,SIM800M64,
SIM800G,SIM808 
 Smart Machine Smart Decision
SIM800 Series_AT Command Manual_V1.09 380 2015-08-03
Contact us:
Shanghai SIMCom wireless solutions Ltd.
Address: Building A, SIM Technology Building, No. 633 Jinzhong Road, Shanghai,
P. R. China 200335
Tel: +86 21 3252 3300
Fax: +86 21 3252 3020
URL: www.sim.com/wm
