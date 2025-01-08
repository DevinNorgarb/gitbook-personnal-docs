# What is Open RAN?

{% embed url="https://ubuntu.com/blog/what-is-open-ran" %}

**Tags:** [Open RAN](https://ubuntu.com/blog/tag/open-ran) , [Telco](https://ubuntu.com/blog/tag/telco) , [Telco 5G](https://ubuntu.com/blog/tag/telco-5g) , [telco edge cloud](https://ubuntu.com/blog/tag/telco-edge-cloud)

You may have heard of the term Open Radio Access Networks (RAN) widely used in the telecom industry in recent years. In this blog, we are going to explain what Open RAN is, why it represents an important technology transformation, and how it will impact the telecom ecosystem. It is the first part of a series of blogs that will discuss this popular topic.

#### Mobile telecommunication networks

Understanding the importance of Open RAN requires some insight into the foundation it’s deployed on, so let’s start with a quick definition of a mobile network. In simplest terms, mobile networks are a connectivity solution that provides wireless communication capabilities to devices. This could be your phone, tablet, or laptop, but also any type of machines, devices and IoT products with communications capabilities.

<figure><img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_988,h_634/https://ubuntu.com/wp-content/uploads/972b/mobileNetwork.png" alt="" height="634" width="988"><figcaption><p>Figure 1. Simple illustration of a mobile network.</p></figcaption></figure>

A mobile network is important not just because it provides voice calls and Internet connectivity to your phone or laptop, but also various types of data services to a vast range of devices, machines, people and businesses. Whether those devices are on the move or not, the network is designed to provide them with seamless connectivity. This is possible thanks to the _radio access network (RAN)_ infrastructure deployed over a wide area, such as an entire country, and a _core network_ located centrally at a data centre acting as the “brain” of the entire mobile network. The core network performs control operations on user data traffic to ensure that services that users have subscribed to receive the agreed quality of service (QoS) levels.

#### Radio access networks

Now let’s dive in a little bit more into RAN, which is simply a collection of radio towers and data processing elements. At a high level, RAN is the bridge between mobile devices and the core network, providing information exchange between a user’s mobile device and data services hosted elsewhere. It delivers user requests for services in the uplink to the mobile network as well as content uploaded by users, and content downloaded by user devices, such as video streams.

In the “uplink” from mobile devices to data networks, radio waves carry the information and signals sent by devices to the network. These radio signals are received by radio equipment hosted on radio towers, and then converted into digital signals in the RAN. Information in these signals is relayed to the mobile core network in data _packets_. The core then forwards these packets to services running over the Internet or on data networks.&#x20;

In the opposite direction, which is the “downlink” from data networks to mobile devices, the reverse process takes place: data from services on the Internet or other data networks are processed by the core network and the RAN, and then delivered to mobile devices.

#### Disaggregated RAN

Traditionally, a RAN is built with appliance-like purpose-built hardware. Part of the RAN is installed on radio towers as radio units and the rest is deployed at data centres to perform central data processing operations. The RAN hardware at data centres runs the entire telecommunications software stack of the RAN as a single processing unit, performing all processing except for the lowest level radio frequency (RF) operations carried out at radio units. In LTE/4G, the processing unit of a RAN is called a _baseband unit_ (BBU), and in 5G, it is called a _gNodeB_.

<figure><img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_1622,h_630/https://ubuntu.com/wp-content/uploads/4db4/RAN_disagregation.png" alt="" height="630" width="1622"><figcaption><p>Figure 2. Disaggregation of RAN: from traditional RAN running the complete protocol stack into one where the stack is disaggregated and run across edge sites.</p></figcaption></figure>

The latest technology transition in the RAN is to disaggregate the software stack of a gNodeB into separate components. One can think of this transition as similar to the migration in modern software systems, from monolithic software architectures to more composable ones consisting of micro services, each of which perform a set of correlated services. The idea in having a disaggregated RAN is to achieve more modularity, offering several benefits to telecom operators and the telco ecosystem overall.

#### Benefits of a disaggregated RAN

The first benefit of a disaggregated RAN is that it allows for relocating parts of the software stack to locations further away from the central cloud towards the radio towers, and deploy them at _edge clouds_. This makes it possible for those parts of the software stack that need quick interaction with radios to be located closer to the radios, providing them with a shorter time to send and receive data.

If an operator were to deploy a complete gNodeB radio stack replicated at each and every radio site, it would be an extremely costly and inefficient deployment strategy. It would also be impractical to maintain and operate such a large number of gNodeBs over a network of thousands radio sites located at remote and hard to reach locations dispersed over a wide geographical area.&#x20;

Instead of a complete gNodeB software stack, a disaggregated RAN allows for only the parts of the stack that can be pushed towards the edge, deployed at edge clouds and shared among multiple closely located radio sites. This deployment structure strikes the balance between achieving higher performance by running some of the radio stack at the edge and lowering CAPEX and OPEX by sharing common parts of the stack across groups of radio sites in a hierarchical architecture.

Another benefit is that because a disaggregated RAN stack is implemented as a set of separate units, multiple vendors can offer their innovative solutions specifically for different parts of the software stack. This incubates the RAN technology ecosystem with new players entering the market and generates more competition. By creating a larger marketplace to source equipment from, operators can reduce their CAPEX in RAN deployments, thanks to higher competition leading to lower equipment prices.&#x20;

Finally, separate parts of the radio stack can be updated and upgraded independently without having to touch the entire software stack each time a specific part of it has to change. This modularity lowers the OPEX in equipment updates and upgrades, and makes it possible to undertake more granular operations carried out at different parts of the RAN independent from others.

#### Open RAN

The benefits of a disaggregated RAN can only be realised if the industry can work in harmony in delivering the components that make up these different components which as a whole builds a complete RAN. This is achievable through standardisation where components are fully interoperable. Just as in any system where separate parts of the system may be sourced from different vendors, agreeing on standard interfaces between disaggregated RAN components is the vital cornerstone of interoperability and smooth system integrations.

<figure><img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_1330,h_520/https://ubuntu.com/wp-content/uploads/c257/open_ran_architecture.png" alt="" height="520" width="1330"><figcaption><p>Figure 3. <em>Simplified diagram of Open RAN architecture.</em></p></figcaption></figure>

Open RAN was born with a simple objective: achieve disaggregated RAN with open standard interfaces. The Third Generation Partnership Project (3GPP), which is the industry standardisation body that publishes mobile telecommunication network standards, defined different options as to how the radio software stack can be disaggregated into separate components. This was then further pioneered by the O-RAN Alliance, defining standard and open interfaces for the disaggregated RAN components.

With open standard interfaces, it is now possible for vendors to implement different parts of the radio stack as either hardware or software, with the assurance that products from different vendors can talk to each other as building blocks of a complete RAN system.

#### Summary

Operators look for new ways to achieve cost-efficiency in their infrastructure, where RAN is accountable for a large portion of their deployment and operational costs. Open RAN offers a new architecture, targeting at delivering on this cost reduction goal in CAPEX and OPEX that operators seek. With a disaggregated architecture, Open RAN incubates a larger RAN vendor ecosystem, lowering equipment costs in the long term by bringing more competition to the market with more innovative products offered for different parts of the radio software protocol stack. A disaggregated RAN will also bring in new capabilities to deploy, update, upgrade, and maintain RANs more effectively, lowering OPEX. The flexibility in deploying parts of the RAN at shared edge cloud locations brings performance benefits to modern edge computing services that require quick interactions.&#x20;

In the next part of this blog series, we will talk about how network functions virtualisation and cloud-native software operation principles complement and further enhance the benefits of Open RAN for operators and the telecom industry.

#### Contact us

<figure><img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_248,h_167/https://ubuntu.com/wp-content/uploads/06f4/contact-us.png" alt="" height="167" width="248"><figcaption></figcaption></figure>

Get in touch with us for your telco deployment needs and your transition to open source in mobile networking. Canonical provides a full stack for your telecom infrastructure. To learn more about our telco solutions, visit our webpage at [ubuntu.com/telco](https://ubuntu.com/telco).

#### Further reading

[What is a telco cloud?](https://ubuntu.com/blog/what-is-a-telco-cloud)

[Bringing automation to telco edge clouds at scale](https://ubuntu.com/blog/bringing-automation-to-telco-edge-clouds-at-scale)

[Fast and reliable telco edge clouds with Intel FlexRAN and Real-time Ubuntu for 5G URLLC scenarios](https://ubuntu.com/blog/intel-flexran-and-real-time-ubuntu-for-5g-urllc)
