---
title: "UCS: AD integration and Open Identity Management"
categories:
- Case Studies
date: 2019-05-02 12:00:00
author: Nico Gulden
cover: /images/posts/2019/05/ucs/cover.jpg
featured: true
---

_This blog is created by our guest blogger from [Univention](https://www.univention.com/), Nico Gulden._

For this reason I was especially happy to establish a business contact between Univention and Rocket.Chat to bring Rocket.Chat as an app in our Univention App Center. My path crossed Rocket.Chat over a year ago. And since we use it in our company for messaging and closed our internal IRC, I am an excited user of Rocket.Chat. I like how it helps me to cut down communication overhead.

Similar to  Rocket.Chat, Univention is a global company with [several active open source projects](https://github.com/univention). Univention arose around the need for an open alternative to Microsoft Active Directory and central identity management in on-premise environments.

Rocket.Chat users faced with similar challenges can now finally - through the integration of Rocket.Chat into Univention Corporate Server (UCS) - enjoy an industry proven widely deployed open source solution. Recently, Rocket.Chat became available as easy to install app on UCS via Univention App Center, our platform marketplace.

In this blog posting I’d like to give interested Rocket.Chat administrators an overview what value UCS can bring to your self-hosted Rocket.Chat environment and the identity management repertoire.

With your Rocket.Chat deployment on UCS, you have a strong foundation to connect it to an existing Active Directory environment. The integration between Rocket.Chat and UCS remains slim and UCS functions as a proxy and takes care of the identity management. UCS is well-tested, it is continuously developed and maintained, and has proven its stability, reliability and openness in hundreds of  production environments over more than a decade because it is used by organizations of every size - from a few people up to hundreds of thousands of people.

UCS empowers administrators to centrally manage user identities themselves and the access rights of users across all supported open source applications. From one place - the web based Univention Management Console (UMC) - they can control which user has access to which application.

<img src="/images/posts/2019/05/ucs/ucs1.png">

UCS can benefit administrators immediately by extending single sign-on to all devices supporting Active Directory. Single sign-on also extends to services and systems supporting other authentication protocols. For example, the UCS App Center lists connectors to Google G Suite and Microsoft Office 365;  and the connector can keep user passwords on-premise by using SAML.

How does UCS accomplish all of this? The backbone for identity management is the directory server OpenLDAP. It stores all the identity and infrastructure information in a structured directory. The well-known open source project Samba 4 is responsible for the Active Directory functionality. Furthermore, simpleSAMLphp takes care of the identity provider role in the SAML context and the solution Kopano Konnect from the long-standing partner Kopano is the workhorse for the OpenID connect provider part.

## Rocket.Chat within the UCS Ecosystem

The Rocket.Chat app on UCS App Center tracks the latest stable release of Rocket.Chat. It automatically leverages the identity management system in UCS. The app consists of the official Docker images from Rocket.Chat and MongoDB. After the installation, Rocket.Chat is already configured accordingly to use the UCS LDAP directory for user authentication. The installation process defines the admin user and sets a default password that is requested to be changed by the administrator upon first login. On the one hand there are the official Docker images and on the other hand comes the integration part resulting in a Rocket.Chat setup that includes the UCS environment start right away.

The integration of Rocket.Chat with UCS simplifies several common operating scenarios in the identity management field regarding Active Directory and thus increases the administrator’s flexibility on its infrastructure architecture. UCS has not been designed to work in a closed environment. Rather, it offers numerous possibilities for integration into existing environments that especially benefit solutions like Rocket.Chat in Univention App Center. Here is a list of standard scenarios supported with UCS:

1. UCS as standalone environment comprising of one or several UCS systems all being part of one domain. That’s a good starting point for a central identity management oriented approach with several users and applications in one environment.
2. UCS as standalone system with uni- or bi-directional synchronization of user identities with Microsoft Active Directory. The environment consists of two separate domains. This scenario is useful when the environment still relies on Active Directory and where identities should be separated in different scopes, but synchronized.
3. UCS as Active Directory member in a Microsoft Active Directory domain. The environment consists of one domain. This scenario is useful when Active Directory shall remain the primary identity source and when business applications requiring the Linux platform should easily be deployed to the environment.
4. Migrate away from Microsoft Active Directory and move the identities to UCS.

We see all theses scenarios in production environments and UCS proves as a reliable piece in easing the challenge to connect different infrastructure requirements with central identity management.

You can give Rocket.Chat on UCS an easy try and [download the pre-build virtual app appliances for VMware, VMware ESXi, VirtualBox and KVM](https://www.univention.com/products/univention-app-center/app-catalog/rocketchat/).

<img src="/images/posts/2019/05/ucs/ucs2.png">

### About UCS and UCS Marketplace

Univention Corporate Server (UCS) is an enterprise Linux distribution derived from Debian GNU/Linux with a strong focus on identity and infrastructure management from Univention, a Germany based company with offices in Bremen, Berlin and Boston, USA.

The Univention Marketplace called App Center is the central hub for administrators to extend UCS with additional features like an Active Directory compatible domain controller or with third party solutions like for example the file share solutions Nextcloud or ownCloud or the online office solutions Collabora or ONLYOFFICE. A user with a digital identity in UCS can use its credentials and login to those solutions. Many apps also support single sign-on via protocols like SAML or OpenID connect.

### About Nico Gulden

Nico Gulden studied applied computer science and works for Univention since 2010. He is Product Manager Apps and responsible for the relationship management of the App vendors in the Univention App Center. His spare time is dedicated to his family, friends, reading, outdoor activities like hiking, photography, Geocaching or mapping for the OpenStreetMap project.

