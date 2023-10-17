# Exploring service discovery attribute in Shopify CarrierService API

[https://dev.to/zubairmohsin33/exploring-service-discovery-attribute-in-shopify-carrierservice-api-1d0l](https://dev.to/zubairmohsin33/exploring-service-discovery-attribute-in-shopify-carrierservice-api-1d0l)

## Overview <a href="#overview" id="overview"></a>

According to Shopify docs, a Carrier Service is:

> A carrier service (also known as a carrier calculated service or shipping service) provides real-time shipping rates to Shopify. Some common carrier services include Canada Post, FedEx, UPS, and USPS. The term **carrier** is often used interchangeably with the terms **shipping company** and **rate provider**.

If we are creating an app that provides **shipping rates** on the checkout, then we need to provide an **endpoint** that will accept a **POST** request from Shopify and then return rates accordingly.

In order to do that, we need to use **CarrierService** API and send a request like below:\


```
POST /admin/api/2021-01/carrier_services.json
{
  "carrier_service": {
    "name": "Shipping Rate Provider",
    "callback_url": "http://shippingrateprovider.com",
    "service_discovery": true
  }
}
```

**callback\_url** points to the endpoint in our app which will accept the **POST** request from Shopify and provide rates in return.

There is also another attribute called **service\_discovery** which is set to **true**. This post aims to explain all about this option.

## Service Discovery <a href="#service-discovery" id="service-discovery"></a>

#### service\_discovery attribute. What is it about? <a href="#servicediscovery-attribute-what-is-it-about" id="servicediscovery-attribute-what-is-it-about"></a>

According to Shopify docs:

> Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples, if set to **true**

Above statement is a bit misleading, as some would think that there will be a form in Shopify Admin which merchants would fill to send dummy data to get example rates. But that's not the case. We'll now see how this request is sent to our endpoint.

#### How service discovery request is sent? <a href="#how-service-discovery-request-is-sent" id="how-service-discovery-request-is-sent"></a>

After a **merchant** creates a Shipping Zone inside a Shipping Profile on Shopify. They can **Add rate** to that shipping zone. They can set up their own rates or use a third party app to calculate rates. We are interested in the second option. Apps which have registered their endpoint using **CarrierService** API will appear in the dropdown as shown in the screenshot below:\
\
**Postcode Shipping** is a third-party app which provides rates.

<figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--d31M7nie--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rqcxl7jwm6bglfsr6usj.png" alt=""><figcaption></figcaption></figure>

The moment merchant selects the app from the dropdown, a **request** is sent to the registered callback endpoint of that app.

#### How to identify service discovery request? <a href="#how-to-identify-service-discovery-request" id="how-to-identify-service-discovery-request"></a>

Unfortunately, there is no special identifier for this request. You can explore the JSON data (shown below) to select an attribute for yourself to differentiate the service discovery request from original request of checkout.

#### What data is sent with service discovery request? <a href="#what-data-is-sent-with-service-discovery-request" id="what-data-is-sent-with-service-discovery-request"></a>

Dummy data is sent when Shopify makes the service discovery request. Merchants cannot alter that data ( at the time writing this article, but this may change in future ).\
Below is the JSON structure of the dummy data sent with service discovery request.\


```
{
      "rate":{
         "origin":{
            "country":"PK",
            "postal_code":"54700",
            "province":null,
            "city":"Lahore",
            "name":"House 584 Model Town Q Block",
            "address1":"House 584 Model Town Q Block",
            "address2":null,
            "address3":null,
            "phone":null,
            "fax":null,
            "email":null,
            "address_type":null,
            "company_name":"rateprovidertest"
         },
         "destination":{
            "country":"US",
            "postal_code":"90210",
            "province":"CA",
            "city":"rate test",
            "name":null,
            "address1":"rate test",
            "address2":null,
            "address3":null,
            "phone":null,
            "fax":null,
            "email":null,
            "address_type":null,
            "company_name":null
         },
         "items":[
            {
               "name":null,
               "sku":"XXXXXXXX",
               "quantity":1,
               "grams":100,
               "price":0,
               "vendor":null,
               "requires_shipping":true,
               "taxable":true,
               "fulfillment_service":"manual",
               "properties":null,
               "product_id":null,
               "variant_id":null
            }
         ],
         "currency":"PKR",
         "locale":"en"
      }
}
```

* **origin** contains the address of pickup location for the selected shipping profile.
* **destination** contains a dummy/random address of the **country** according to created **shipping zone**.
* **items** attribute is an array which represent dummy cart items.

#### Rest of World shipping zone <a href="#rest-of-world-shipping-zone" id="rest-of-world-shipping-zone"></a>

If the shipping zone we created is only for **one country** then Shopify will send **one request** with destination country set to selected country.

If shipping zone is Rest of World then Shopify sends **four requests** for **four different countries**.

> While working on it, we found out that Shopify sends four requests with **country** set to United States of America (US), Mexico (MX), Denmark (DE) and Japan (JP) respectively. This pattern of requests may change in future.

This can cause confusion in the case when merchant has setup a separate shipping zone and rates for a country like **US** and then also see those rates in Rest of World shipping zone. Be ready to answer some support tickets.

#### How rates/services are shown to merchants? <a href="#how-ratesservices-are-shown-to-merchants" id="how-ratesservices-are-shown-to-merchants"></a>

When merchant selects the app from dropdown and a request is sent to third-party app, if they return rates/services, it will be shown in the **SERVICES** section of the modal as shown below:\
[![Rates returned by third party app](https://res.cloudinary.com/practicaldev/image/fetch/s--9pTvVrbE--/c\_limit%2Cf\_auto%2Cfl\_progressive%2Cq\_auto%2Cw\_880/https://dev-to-uploads.s3.amazonaws.com/i/wy40vgvv3i8rkce1n03b.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--9pTvVrbE--/c\_limit%2Cf\_auto%2Cfl\_progressive%2Cq\_auto%2Cw\_880/https://dev-to-uploads.s3.amazonaws.com/i/wy40vgvv3i8rkce1n03b.png)\
Two rates returned from third party app for the **US** country.

#### What happens when merchant selects a rate/service? <a href="#what-happens-when-merchant-selects-a-rateservice" id="what-happens-when-merchant-selects-a-rateservice"></a>

If a merchant selects **one rate** from above screenshot, only that rate will be shown on checkout.

Lets take a look at an example. If merchant creates a shipping zone for **USA** and third-party app returns **two rates** in response to **service discovery** request. Merchant selects one of them. **Then only selected rate** will be shown on the **checkout**. Even though third-party will still be providing **two rates** in response to request made on the checkout.

## Conclusion <a href="#conclusion" id="conclusion"></a>

In this post we explored the **service discovery** request sent by Shopify to a third-party shipping rate provider app. We looked at **service\_discovery** attribute, what is it and what happens when it is set to **true**. How service discovery is sent, identifying such request and what data is sent along with this request. We also looked at differences for **Rest of World** shipping zone. In the end, we discovered how rates/services are shown to merchants inside Shopify and what happens on the **checkout** when they select one of them.

***

Unfortunately, this feature is not properly documented in Shopify docs. All the information that is stated above, was found by trial and error approach.

\
