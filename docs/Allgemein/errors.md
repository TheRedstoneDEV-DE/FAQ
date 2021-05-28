---
id: errors
title: Fehlercodes
---

## Info vorab

Es gibt aktuell noch einige Fehlermeldungen im Panel, deren Code an diese Liste nicht anbgepasst ist. Wir bitten euch daher uns alle Fehelrcodes via [Ticket](https://dash.robin-it.de/ticket) oder Livechat zu melden, bei denen Ihr das Gefühlt habt, dass diese nicht zu den hier angegebenen passen. 

## Allgemeine Einordnung

|Code|Fehler|
| ------------- | :-----------: |
|1xxx|Allgemeiner Fehler|
|2xxx|Authentication Error|
|3xxx|Payment Error|
|4xxx|LXC Error|
|5xxx|KVM Error|
|6xxx|Webspace Error|
|7xxx|Datenbank Error|
|8xxx|TeamSpeak Error|
|9xxx|Teamspeak-Audiobot Error|
|10xxx|Gameserver Error|
|11xxx|Services Error|
|12xxx|API-Error|


## Fehler im Detail

### KVM-Fehler: 5xxx

> 5001

Fehler beim Starten des Servers

> 5002

Fehler beim stoppen des Servers

> 5003

Fehler beim Reboot des Servers

> 5004

Fehler beim setzten eines neuen Root-Passworts

> 5005

Fehler beim neu installieren des Servers

> 5006

Fehler beim starten der VNC-Console



### API-Fehler: 12xxx

> 12001

Datenbankverbindung kann beim Starten der API nicht hergestellt werden.

> 12002

Automatische Weiterleitung kann nicht erfolgen. Meist ist dies ein Client-Fehler.

>12003

Datenbankfehler bei einer GET-Abfrage

>12004

Datenbankfehler bei einer POST-Abfrage