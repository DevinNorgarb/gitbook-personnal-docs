# Networking Overview

When you work with Oracle Cloud Infrastructure, one of the first steps is to set up a Virtual Cloud Network (VCN) for cloud resources. This topic gives you an overview of Oracle Cloud Infrastructure Networking components and typical scenarios for using a VCN.

{% hint style="info" %}
Watch a [video introduction](https://apexapps.oracle.com/pls/apex/f?p=44785:265:0:::265:P265_CONTENT_ID:32072) to the service.
{% endhint %}

## Networking Components

The Networking service uses virtual versions of traditional network components you might already be familiar with:

Virtual Cloud Network (VCN)\
A virtual, private network that you set up in Oracle data centers. It closely resembles a traditional network, with firewall rules and specific types of communication gateways that you can decide to use. A VCN resides in a single Oracle Cloud Infrastructure region and covers one or more CIDR blocks (IPv4 and IPv6, if enabled). See [Allowed VCN Size and Address Ranges](networking-overview.md#Allowed). The terms _virtual cloud network_, _VCN, and cloud network_ are used interchangeably in this documentation. For more information, see [VCNs and Subnets](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/VCNs.htm).

Subnets\
Subdivisions you define in a VCN (for example, 10.0.0.0/24, 10.0.1.0/24, or 2001:DB8::/64). Subnets contain virtual network interface cards (VNICs), which attach to Compute instances. Each subnet consists of a contiguous range of IP addresses (for IPv4 and IPv6, if enabled) that don't overlap with other subnets in the VCN. You can set a subnet to exist either in a single **availability domain** or across an entire region (regional subnets are recommended). Subnets act as a unit of configuration within the VCN: All VNICs in a particular subnet use the same route table, security lists, and DHCP options. You can define a subnet as either public or private when you create it. Private means VNICs in the subnet can't have public IPv4 addresses and internet communication with IPv6 endpoints is prohibited. Public means VNICs in the subnet can have public IPv4 addresses and internet communication is allowed with IPv6 endpoints. See [Access to the Internet](networking-overview.md#Private).

VNIC\
A virtual network interface card (VNIC), which attaches to a Compute instance and resides in a subnet to enable a connection to the subnet's VCN. A VNIC is the component the Compute instance uses to connect with endpoints inside and outside the VCN. Each Compute instance has a primary VNIC that's created during Compute instance creation and can't be removed. You can add secondary VNICs to an existing Compute instance (in the same availability domain as the primary VNIC), and remove them as needed. Each secondary VNIC can be in a subnet in the same VCN as the primary VNIC, or in a different subnet either in the same VCN or a different one. However, all the VNICs must be in the same availability domain as the Compute instance. For more information, see [Virtual Network Interface Cards (VNICs)](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingVNICs.htm). A VNIC attached to a Compute instance and residing in an IPv6-enabled subnet can optionally be assigned an IPv6 address.

Private IP\
A private IPv4 address and related information for addressing a Compute instance (for example, a hostname for DNS). Each VNIC has a primary private IP, and you can add and remove secondary private IPs. The primary private IP address on a Compute instance doesn't change during the Compute instance's lifetime and can't be removed. For more information, see [Private IP Addresses](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingIPaddresses.htm).

Public IP\
A public IPv4 address and related information. You can optionally assign a public IP to Compute instances or other resources that have a private IP. Public IPs can be either _ephemeral_ or _reserved_. For more information, see [Public IP Addresses](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm).

IPv6\
An IPv6 address and related information. IPv6 addressing is supported for all commercial and government regions. For more information, see [IPv6 Addresses](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/ipv6.htm).

Dynamic Routing Gateway (DRG)\
An optional virtual router that you can attach to one or many VCNs. It provides a path for _private_ network traffic between a VCN and an on-premises network. You can use it with other Networking components and a router in an on-premises network to establish a connection by way of Site-to-Site VPN or Oracle Cloud Infrastructure FastConnect. It can also provide a path for private network traffic between a VCN and another VCN in the same region or in a different region. For more information, see [Access to Your On-Premises Network](networking-overview.md#on_prem_access), [Dynamic Routing Gateways](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingDRGs.htm), [Local VCN Peering Through an Upgraded DRG](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenario_d.htm) and [Remote VCN Peering through an Upgraded DRG](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenario_e.htm).

Internet Gateway\
An optional virtual router that you can add to a VCN for direct internet access. For more information, see [Internet Gateway](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingIGs.htm) and [Scenario A: Public Subnet](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenarioa.htm).

Network Address Translation (NAT) Gateway\
Another optional virtual router that you can add to a VCN. It gives cloud resources without public IP addresses access to the internet without exposing those resources to incoming internet connections. For more information, see [Public vs. Private Subnets](networking-overview.md#Public) and [NAT Gateway](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/NATgateway.htm).

Service Gateway\
Another optional virtual router that you can add to a VCN. It provides a path for _private_ network traffic between a VCN and [supported services in the Oracle Services Network](https://www.oracle.com/cloud/networking/service-gateway/service-gateway-supported-services/) (examples: Oracle Cloud Infrastructure Object Storage and Autonomous AI Database). For more information, see [Access to Oracle Services: Service Gateway](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/servicegateway.htm#Access_to_Oracle_Services_Service_Gateway).

Local Peering Gateway (LPG)\
Another optional virtual router that you can add to a VCN. It lets you peer one VCN with another VCN in the same region. _Peering_ means the VCNs communicate using private IP addresses, without the traffic traversing the internet or routing through an on-premises network. A VCN must have a separate LPG for each peering it establishes. For more information, see [Local VCN Peering using Local Peering Gateways](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/localVCNpeering.htm).

Remote Peering Connection (RPC)\
A component that you can add to a DRG. It lets you peer one VCN with another VCN in a _different_ region. For more information, see [Remote VCN Peering through an Upgraded DRG](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenario_e.htm).

Route Tables\
Virtual route tables for a VCN. They have rules to route traffic from subnets to destinations outside the VCN by way of gateways or specially configured Compute instances. A VCN comes with an empty default route table, and you can add custom route tables. For more information, see [VCN Route Tables](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingroutetables.htm).

Security Rules\
Virtual firewall rules for a VCN. Ingress and egress rules specify the types of traffic (protocol and port) allowed in and out of the Compute instances. You can decide whether a particular rule is stateful or stateless. For example, you can allow incoming SSH traffic from anywhere to a set of Compute instances by setting up a stateful ingress rule with source CIDR 0.0.0.0/0, and destination TCP port 22. To implement security rules, you can use _network security groups_ or _security lists_. A network security group consists of a set of security rules that apply only to the resources in that group. Contrast this with a security list, where the rules apply to all the resources in any subnet that uses the list. A VCN comes with a default security list with default security rules. For more information, see [Security Rules](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securityrules.htm).

DHCP Options\
Configuration information automatically provided to the Compute instances when they boot up. For more information, see [DHCP Options](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingDHCP.htm).

CIDR Notation\
A compact method for specifying IP addresses or address ranges and network masks. For example, using IPv4 a private IP address range of 10.0.0.0/24 represents all addresses between 10.0.0.0 and 10.0.0.255. The /24 represents a subnet mask of 255.255.255.0 because the first 24 bits are masked. IPv6 uses similar notation for address blocks. For more information, see [RFC1817](https://datatracker.ietf.org/doc/html/rfc1817) and [RFC1519](https://datatracker.ietf.org/doc/html/rfc1519).

## Allowed VCN Size and Address Ranges

A VCN covers one or more IPv4 CIDR blocks or IPv6 prefixes. The allowable VCN size range is /16 to /30. Example: 10.0.0.0/16. The Networking service reserves the first two IP addresses and the last one in each subnet's CIDR.

You can enable IPv6 for VCNs when you create them, or you can enable IPv6 on existing IPv4-only VCNs. If you decide to use an Oracle-allocated IPv6 prefix, you always receive a /56. Alternately, you can [import your own BYOIP IPv6 prefix](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/BYOIP.htm) from which you can assign any prefix of /64 or larger to a VCN, or you can assign a ULA prefix of /64 or larger. GUA ranges can be up to 2000::/3 and ULA ranges can be up to fc00::/7. IPv6 subnets are always /64 in size.

For a VCN, we recommend using the private IP address ranges specified in [RFC 1918](https://tools.ietf.org/html/rfc1918) (the RFC recommends 10.0/8 or 172.16/12 but Oracle doesn't support those sizes so use 10.0/16, 172.16/16, and 192.168/16). However, you can use a publicly routable range. Regardless, this documentation uses the term _private IP address_ when referring to IP addresses in a VCN's CIDR. Address ranges that are disallowed are described in [IP Addresses Reserved for Use by Oracle](networking-overview.md#Reserved). For IPv6-enabled VCNs, Oracle can either allocate a global unicast address /56 prefix or you can create a VCN with a BYOIPv6 prefix.

The VCN's CIDR blocks must not overlap with each other, with CIDRs in a connected on-premises network, or with the CIDRs of [another VCN you peer with](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/VCNpeering.htm). The subnets in a particular VCN must not overlap with each other. For reference, here's a [CIDR calculator](http://www.ipaddressguide.com/cidr).

IPv6 addressing is supported for all commercial and government regions. For more information, see [IPv6 Addresses](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/ipv6.htm).

## Availability Domains and VCNs

A VCN resides in a single Oracle Cloud Infrastructure region. A region can have several availability domains to provide isolation and redundancy. For more information, see [Regions and Availability Domains](https://docs.oracle.com/iaas/Content/General/Concepts/regions.htm).

Originally subnets were designed to cover only one availability domain (AD) in a region. They were all _AD-specific_, which means the subnet's resources were required to reside in a particular availability domain. Now subnets can be either AD-specific or _regional_. You select the type when you create the subnet. Both types of subnets can coexist in the same VCN. In the following diagram, subnets 1 to 3 are AD-specific, and subnet 4 is regional.

[![This image shows a VCN with a regional subnet and three AD-specific subnets.](../../../.gitbook/assets/network_regional_subnet.svg)](https://docs.oracle.com/en-us/iaas/Content/Network/Images/network_regional_subnet.svg)

Aside from the removal of the AD constraint, regional subnets behave the same as AD-specific subnets. We recommend using regional subnets because they're more flexible. They make it easier to efficiently divide a VCN into subnets while also designing for availability domain failure.

When you create a resource such as a Compute instance, you decide which availability domain the resource is in. From a virtual networking standpoint, you must also decide which VCN and subnet the instance is in. You can select either a regional subnet, or an AD-specific subnet that matches the AD you chose for the instance.

## Default Components that Come With a VCN

A VCN automatically comes with these default components:

* Default [route table](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingroutetables.htm), with no route rules
* Default [security list](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists.htm#Default), with default security rules
* Default [set of DHCP options](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingDHCP.htm), with default values

You can't delete these default components. However, you can change their contents (for example, the rules in the default security list). You can also create custom versions of each kind of component in a VCN. Limits exist as to how many you can create and the maximum number of rules. For more information, see [Limits by Service](https://docs.oracle.com/iaas/Content/General/Concepts/servicelimits.htm).

Each subnet always has these components associated with it:

* One route table
* One or more security lists (for the maximum number, see [Limits by Service](https://docs.oracle.com/iaas/Content/General/Concepts/servicelimits.htm))
* One set of DHCP options

During subnet creation, you can decide which route table, security list, and set of DHCP options the subnet uses. If you don't specify a particular component, the subnet automatically uses the VCN's default component. You can [change which components the subnet uses](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/edit_subnet.htm) at any time.

{% hint style="info" %}
Security lists are one way to control traffic in and out of the VCN's resources. You can also use [network security groups](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/networksecuritygroups.htm).
{% endhint %}

## Connectivity Choices

You can control whether subnets are public or private, and whether instances get public IP addresses. You can set up a VCN to have access to the internet if required. You can also privately connect a VCN to public Oracle Cloud Infrastructure services such as Object Storage, to an on-premises network, or to another VCN.

### Public vs. Private Subnets

When you create a subnet, by default it's considered public, which means instances in that subnet are allowed to have public IPv4 addresses and internet communication is permitted with IPv6 endpoints. Whoever launches the instance chooses whether it has a public IPv4 address or specifies whether an IPv6 address from the allocated prefix will be assigned. You can override that behavior when creating the subnet and request that it be private, which disallows the use of public IPv4 addresses and internet communication with IPv6 endpoints. Network administrators can therefore ensure that instances in the subnet have no internet access, even if the VCN has a working internet gateway, and security rules and firewall rules allow the traffic.

### How IP Addresses Are Assigned

Each instance has a primary VNIC that's created during instance launch and cannot be removed. You can add [secondary VNICs](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingVNICs.htm) to an existing instance (in the same availability domain as the primary VNIC) and remove them as you like.

Every VNIC has a private IP address from the associated subnet's CIDR. You can choose the particular IP address (during instance launch or secondary VNIC creation), or Oracle can choose it for you. The private IP address does not change during the lifetime of the instance and cannot be removed. You can also add [secondary private IPv4 addresses](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingIPaddresses.htm) or secondary IPv6 addresses to a VNIC.

If the VNIC is in a public subnet, then each private IP on that VNIC can have a [public IPv4 address or IPv6 address](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) assigned to it at your discretion. For IPv4, Oracle chooses the particular IP address. For IPv6, you can specify the IP address. There are two types of public IPs: _ephemeral_ and _reserved_. An ephemeral public IP exists only for the lifetime of the private IP it's assigned to. In contrast, a reserved public IP exists as long as you want it to. You maintain a pool of reserved public IPs and allocate them to your instances at your discretion. You can move them from resource to resource in a region as you need to.

### Access to the Internet

There are two optional gateways (virtual routers) that you can add to your VCN depending on the type of internet access you need:

* Internet gateway: For resources with public IP addresses that need to be reached from the internet (example: a web server) or need to initiate connections to the internet.
* NAT gateway: For resources without public IP addresses that need to initiate connections to the internet (example: for software updates) but need to be protected from inbound connections from the internet.

Just having an internet gateway alone does not expose the instances in the VCN's subnets directly to the internet. The following requirements must also be met:

* The [internet gateway](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingIGs.htm) must be enabled (by default, the internet gateway is enabled upon creation).
* The subnet must be [public](networking-overview.md#Public).
* The subnet must have a [route rule](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingroutetables.htm) that directs traffic to the internet gateway.
* The subnet must have [security list rules](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists.htm) that allow the traffic (and each instance's firewall must allow the traffic).
* The instance must have a [public IP address](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm).

{% hint style="info" %}
To access public services such as Object Storage from your VCN without the traffic going over the internet, use a [service gateway](networking-overview.md#service_gateway).

Traffic through an internet gateway between a VCN and a public IP address that is part of Oracle Cloud Infrastructure (such as Object Storage) is routed without being sent over the internet.
{% endhint %}

You can also give a subnet indirect access to the internet by setting up an internet proxy in your on-premises network and then connecting that network to your VCN by way of a DRG. For more information, see [Access to Your On-Premises Network](networking-overview.md#on_prem_access).

### Access to Public Oracle Cloud Infrastructure Services

You can use a service gateway with your VCN to enable private access to public Oracle Cloud Infrastructure services such as Object Storage. For example, DB Systems in a private subnet in your VCN can back up data to Object Storage without needing public IP addresses or access to the internet. No internet gateway or NAT is required. For more information, see [Access to Oracle Services: Service Gateway](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/servicegateway.htm#Access_to_Oracle_Services_Service_Gateway).

### Access to Your On-Premises Network

There are two ways to connect your on-premises network to Oracle Cloud Infrastructure:

* [Site-to-Site VPN:](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingIPsec.htm) Offers multiple IPSec tunnels between your existing network's edge and your VCN, by way of a [DRG](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingDRGs.htm) that you create and attach to your VCN.
* [Oracle Cloud Infrastructure FastConnect:](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/fastconnect.htm) Offers a private connection between your existing network's edge and Oracle Cloud Infrastructure. Traffic does not traverse the internet. Both private peering and public peering are supported. That means your on-premises hosts can access private IPv4 or IPv6 addresses in your VCN as well as regional public IPv4 or IPv6 addresses in Oracle Cloud Infrastructure (for example, Object Storage or public [load balancers](https://docs.oracle.com/iaas/Content/Balance/Concepts/balanceoverview.htm) in your VCN).

You can use one or both types of the preceding connections. If you use both, you can use them simultaneously, or in a redundant configuration. These connections come to your VCN by way of a single DRG that you create and attach to your VCN. Without that DRG attachment and a route rule for the DRG, traffic does not flow between your VCN and on-premises network. At any time, you can detach the DRG from your VCN but maintain all the remaining components that form the rest of the connection. You could then reattach the DRG again, or attach it to another VCN.

### Access to Another VCN

You can connect your VCN to another VCN over a private connection that doesn't require the traffic to traverse the internet. In general, this type of connection is referred to as _VCN peering_. Each VCN must have specific components to enable peering. The VCNs must also have specific IAM policies, route rules, and security rules that permit the connection to be made and the wanted network traffic to flow over the connection. For more information, see [Access to Other VCNs: Peering](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/VCNpeering.htm).

### Connection to Microsoft Azure

Oracle and Microsoft have created a cross-cloud connection between Oracle Cloud Infrastructure and Microsoft Azure in certain regions. This connection lets you set up cross-cloud workloads without the traffic between the clouds going over the internet. For more information, see [Interconnect for Azure](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/azure.htm).

### Connection to Other Clouds with Libreswan

You can connect your VCN to another cloud provider by using Site-to-Site VPN with a [Libreswan](https://libreswan.org/) VM as the customer-premises equipment (CPE). For more information, see [Access to Other Clouds with Libreswan](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/libreswan.htm).

## Networking Scenarios

This documentation includes a few basic networking scenarios to help you understand the Networking service and how the components work together in general. See these topics:

* [Scenario A: Public Subnet](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenarioa.htm)
* [Scenario B: Private Subnet with a VPN](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenariob.htm)
* [Scenario C: Public and Private Subnets with a VPN](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenarioc.htm)

### Transit Routing

Scenarios A–C show an on-premises network connected to one or more VCNs by way of a DRG and [FastConnect](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/fastconnect.htm) or [Site-to-Site VPN](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingIPsec.htm), and accessing only the resources in those VCNs.

The following advanced routing scenarios give an on-premises network access beyond the resources in the connected VCN. Traffic travels from an on-premises network to the DRG, and then _transits through_ the DRG to its destination. See these topics:

* [Transit Routing inside a hub VCN](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/transitrouting.htm): An on-premises network has access to several VCNs in the same region over a single FastConnect private virtual circuit or Site-to-Site VPN. The DRG and attached VCNs are in a hub-and-spoke topology, with the on-premises network connected to the DRG which acts as the hub. The spoke VCNs are peered.
* [Private Access to Oracle Services](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/transitroutingoracleservices.htm): An on-premises network has private access to Oracle services in the [Oracle Services Network](https://www.oracle.com/cloud/networking/service-gateway/service-gateway-supported-services/) by way of a connected VCN and the VCN's service gateway. The traffic doesn't go over the internet.

## Regions and Availability Domains

A VCN resides in a single Oracle Cloud Infrastructure region. Each subnet resides in a single availability domain (AD). Availability domains are designed to provide isolation and redundancy in the VCN, as illustrated in [Scenario B](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenariob.htm) and [Scenario C](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/scenarioc.htm) mentioned earlier. For example, you could set up a primary set of subnets in a single AD, and then set up a duplicate set of subnets in a secondary AD. The two ADs are isolated from each other in the Oracle data centers, so if one fails, you can easily switch over to the other AD. For more information, see [Regions and Availability Domains](https://docs.oracle.com/iaas/Content/General/Concepts/regions.htm).

## Public IP Address Ranges

For a list of Oracle Cloud Infrastructure public IP ranges, see [IP Address Ranges](https://docs.oracle.com/iaas/Content/General/Concepts/addressranges.htm).

## IP Addresses Reserved for Use by Oracle

Certain IP addresses are reserved for Oracle Cloud Infrastructure use and can't be used in an address numbering scheme.

### 169.254.0.0/16

These addresses are used for iSCSI connections to the boot and block volumes, instance metadata, and other services.

### Class D and Class E

All addresses from 224.0.0.0 to 239.255.255.255 (Class D) are prohibited for use in a VCN; they're reserved for multicast address assignments in the IP standards. See [RFC 3171](https://tools.ietf.org/html/rfc3171) for details.

All addresses from 240.0.0.0 to 255.255.255.255 (Class E) are prohibited for use in a VCN; they're reserved for future use in the IP standards. See [RFC 1112, Section 4](https://tools.ietf.org/html/rfc1112) for details.

### Three IP Addresses in Each Subnet

These addresses consist of:

* The first IP address in the CIDR (the network address)
* The last IP address in the CIDR (the broadcast address)
* The first host address in the CIDR (the subnet default gateway address)

For example, in a subnet with CIDR 192.168.0.0/24, these addresses are reserved:

* 192.168.0.0 (the network address)
* 192.168.0.255 (the broadcast address)
* 192.168.0.1 (the subnet default gateway address)

The remaining addresses in the CIDR (192.168.0.2 to 192.168.0.254) are available for use.

## Creating Automation with Events

You can create automation based on state changes for Oracle Cloud Infrastructure resources by using event types, rules, and actions. For more information, see [Overview of Events](https://docs.oracle.com/iaas/Content/Events/Concepts/eventsoverview.htm).

## Resource Identifiers

Most types of Oracle Cloud Infrastructure resources have a unique, Oracle-assigned identifier called an Oracle Cloud ID (OCID). For information about the OCID format and other ways to identify your resources, see [Resource Identifiers](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).

## Ways to Access Oracle Cloud Infrastructure

You can access Oracle Cloud Infrastructure (OCI) by using the [Console](https://docs.oracle.com/iaas/Content/GSG/Tasks/signingin_topic-Signing_In_for_the_First_Time.htm) (a browser-based interface), [REST API](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm), or [OCI CLI](https://docs.oracle.com/iaas/Content/API/Concepts/cliconcepts.htm). Instructions for using the Console, API, and CLI are included in topics throughout this documentation. For a list of available SDKs, see [Software Development Kits and Command Line Interface](https://docs.oracle.com/iaas/Content/API/Concepts/sdks.htm).

To access the [Console](https://cloud.oracle.com/), you must use a [supported browser](https://docs.oracle.com/iaas/Content/GSG/Tasks/signinginIdentityDomain.htm#supported-browsers). To go to the Console sign-in page, open the navigation menu at the top of this page and select **Infrastructure Console**. You are prompted to enter your cloud tenant, your user name, and your password.

For general information about using the API, see [REST APIs](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm).

## Authentication and Authorization

Each service in Oracle Cloud Infrastructure integrates with IAM for authentication and authorization, for all interfaces (the Console, SDK or CLI, and REST API).

An administrator in an organization needs to set up **groups**, **compartments**, and **policies** that control which users can access which services, which resources, and the type of access. For example, the policies control who can create new users, create and manage the cloud network, create instances, create buckets, download objects, and so on. For more information, see [Managing Identity Domains](https://docs.oracle.com/iaas/Content/Identity/domains/overview.htm). For specific details about writing policies for each of the different services, see [Policy Reference](https://docs.oracle.com/iaas/Content/Identity/Reference/policyreference.htm).

If you're a regular user (not an administrator) who needs to use the Oracle Cloud Infrastructure resources that the company owns, contact an administrator to set up a user ID for you. The administrator can confirm which compartment or compartments you can use.

## IAM Policies for Networking

The most straightforward approach to granting access to Networking is the policy listed in [Let network admins manage a cloud network](https://docs.oracle.com/iaas/Content/Identity/Concepts/commonpolicies.htm#network-admins-manage-cloud-network). It covers the cloud network and all the other Networking components (subnets, security lists, route tables, gateways, and so on). To also give network admins the ability to create instances (to test network connectivity), see [Let users launch compute instances](https://docs.oracle.com/iaas/Content/Identity/Concepts/commonpolicies.htm#launch-instances).

If you're new to policies, see [Managing Identity Domains](https://docs.oracle.com/iaas/Content/Identity/domains/overview.htm) and [Common Policies](https://docs.oracle.com/iaas/Content/Identity/Concepts/commonpolicies.htm).

For reference material for writing more detailed policies for Networking, see [Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/policyreference/corepolicyreference.htm).

### Individual Resource-Types

You can write policies that focus on individual resource-types (for example, security lists only) instead of the broader `virtual-network-family`. The `instance-family` resource-type also includes several permissions for VNICs, which reside in a subnet but attach to an instance. For more information, see [Details for Verb + Resource-Type Combinations](https://docs.oracle.com/iaas/Content/Identity/policyreference/corepolicyreference.htm#Core) and [Virtual Network Interface Cards (VNICs)](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingVNICs.htm).

A resource-type called `local-peering-gateways` is included within `virtual-network-family` and includes two other resource-types related to local VCN peering (within region):

* `local-peering-from`
* `local-peering-to`

The `local-peering-gateways` resource-type covers all permissions related to local peering gateways (LPGs). The `local-peering-from` and `local-peering-to` resource-types are for granting permission to connect two LPGs and define a peering relationship within a single region. For more information, see [Local Peering using an LPG (VCNs in the Same Tenancy)](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/drg-iam.htm#scenario_m__local-LPG) or [Local Peering using an LPG (VCNs in Different Tenancies)](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/drg-iam.htm#scenario_m__local-LPG-xten).

Similarly, a resource-type called `remote-peering-connections` is included within `virtual-network-family` and includes two other resource-types related to remote VCN peering (across regions):

* `remote-peering-from`
* `remote-peering-to`

The `remote-peering-connections` resource-type covers all permissions related to remote peering connections (RPCs). The `remote-peering-from` and `remote-peering-to` resource-types are for granting permission to connect two RPCs and define a peering relationship across regions. For more information, see [Remote Peering with a Legacy DRG](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/drg-iam.htm#scenario_m__remote-peer-policy) and [Remote Peering with an Upgraded DRG](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/drg-iam.htm#scenario_m__IAM_cross-tenancy).

### Nuances of Different Verbs

You can write policies that limit the level of access by using a different policy verb (`manage` instead of `use`, and so on). If you do, here are some nuances to understand about the policy verbs for Networking.

Be aware that the `inspect` verb not only returns general information about the cloud network's components (for example, the name and OCID of a security list, or of a route table). It also includes the contents of the component (for example, the actual rules in the security list, the routes in the route table, and so on).

Also, the following types of abilities are available only with the `manage` verb, not the `use` verb:

* Update (enable/disable) `internet-gateways`
* Update `security-lists`
* Update `route-tables`
* Update `dhcp-options`
* Attach a Dynamic Routing Gateway (DRG) to a Virtual Cloud Network (VCN)
* Create an IPSec connection between a DRG and customer-premises equipment (CPE)
* Peer VCNs

{% hint style="warning" %}
Each VCN has various components that directly affect the behavior of the network (route tables, security lists, DHCP options, Internet Gateway, and so on). When you create one of these components, you establish a relationship between that component and the VCN, which means you must be allowed in a policy to both create the component and manage the VCN itself. However, the ability to update that component (to change the route rules, security list rules, and so on) does not require permission to manage the VCN itself, even though changing that component can directly affect the behavior of the network. This design enables least-privilege policies but requires trust in users who can update components.
{% endhint %}

For more information about policy verbs, see [Policy Basics](https://docs.oracle.com/iaas/Content/Identity/Concepts/policies.htm#Policy).

### Peering Policies

For policies used in connecting a DRG to VCNs and DRGs in other regions and tenancies, see [IAM Policies for Routing Between VCNs](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/drg-iam.htm).

## Limits on Networking Components

See [Networking Limits](https://docs.oracle.com/iaas/Content/General/Concepts/servicelimits.htm#network_limits) for a list of applicable service limits, and [Requesting a Service Limit Increase](https://docs.oracle.com/iaas/Content/General/Concepts/servicelimits-request-increase.htm) for instructions on requesting a limit increase.
