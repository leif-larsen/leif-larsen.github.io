---
title: "Implementing SOAP with PHP"
date: "2012-08-30"
---

Recently I have been working with a project requiring the use of SOAP. Beforehand my knowledge of SOAP was not great, but I had the basic idea of it. This project was therefore quite fun to do, because it caused a few challenges, and I learned a lot.

The idea was fairly simple; a customer should give some information (name, birthdate and zip number) to initiate an order form. This information was to be sent to a service called NUBIX, which would use this information to fetch more information about the customer. This extended information would then be returned, and the needed fields for an order would be automatically be filled in.

To fill you out with some background information, NUBIX is a web service which is central for power suppliers in Norway. Power suppliers can use this in their web pages to get basic information like address, place etc., but also more information regarding measuring point IDs etc (used to identify fuse boxes). This service is run on a IIS server, and as far as my research showed, no other power suppliers had implemented this with PHP. Also the people in control of NUBIX did not have any examples of implementation with PHP.

Anyhow, my first instinct was obviously to try the native PHP SOAP library. NUBIX uses WSDL, and the requests and responses is pretty much straight forwards. It turned out that it wasn’t as easy as first expected. I thought it might be just that I didn’t understand how SOAP worked properly, so I stumbled across this brilliant explanation of it (check it out [here](http://stackoverflow.com/questions/10511478/php-soap-client-for-uk-mail-webservice-api)). Basically I tried to solve it this way, but I had no luck this way either. I could connect to the service, but all I got back was “The user ‘Unknown User’ is not verified” (loosely translated from Norwegian).

My next try was to go ahead and use Nusoap, which is a SOAP library developed before the native library. I hesitated to use this library, seeing as it is not in development anymore, and the only real reason to use it is legacy reasons. But I was on a deadline, so I gave it a shot and with got some progress. I managed to get passed the first error message I had received, but now I got some other error. I have to admit I can’t remember what it was, but it had to do with the request I sent. This puzzled me, seeing as the request I sent resembled the example request I got from the people in control of NUBIX.

My last try was to send in raw XML, to make sure that the request was correct, down to the smallest whitespace. This time the response was that the verb in the request (POST in this case) was not allowed. I modified the code, so I could send the request as a GET request, but this did not work, since I were not able to pass any data.

So, how did I solve this? Well, after quite some time googling around, I came across another link to the NUBIX service, but in another format. The previous link was “https://ws.nubix.no/Schemas/2011/Requestor/NubixService.wsdl”, but the new one were “https://ws.nubix.no/Nubix.asmx?WSDL”. Suddenly I was able to send raw XML as a POST request, and get a positive response back! Success at last.

I won’t be going in detail about all the code I wrote here, because it was a lot. The code below is a modified function to show how to send raw XML with nusoap. As you might see the function takes three parameters, last name, zip code and birth date (the format which it needs to be is 1990-10-15). Also you need to make sure that nusoap uses UTF-8.

```php
<?php function getNUBIX($name, $zip, $bdate) { 
   $client = new nusoap_client('https://ws.nubix.no/Nubix.asmx?WSDL', 'wsdl'); 
   $client->soap_defencoding = 'UTF-8'; 
   $client->decode_utf8 = false; 
   $id = "2345212453234"; 
   $xmlbody = '<?xml version="1.0" encoding="utf-8"?>
   <soap_Envelope xmlns_xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns_xsd="http://www.w3.org/2001/XMLSchema" xmlns_soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap_Header> 
         <credentialsHeader > 
            <Username >*******</Username> 
            <Password >*******</Password>
         </credentialsHeader> 
      </soap_Header> 
      <soap_Body> 
         <MeteringPointIdRequest > 
            <RequestId >'.$id.'</RequestId> 
            <Requestor > 
               <GLN>***********</GLN> 
            </Requestor> 
            <Customers > 
               <DomesticCustomer >
                  <LastName>'.$name.'</LastName>
                  <BirthDate>'.$date.'</BirthDate>
                  <Addresses> 
                     <Address>
                        <PostCode>'.$zip.'</PostCode>
                        <CountryCode>NO</CountryCode> 
                     </Address> 
                  </Addresses> 
               </DomesticCustomer> 
            </Customers> 
         </MeteringPointIdRequest> 
      </soap_Body> 
   </soap_Envelope>'; 
   $endpoint = "http://www.ediel.no/schemas/public/nubix/:GetMeteringPointIdRequest"; 
   $result = $client->send($xmlbody, $endpoint);
   //print_r($client->request); 
   //print_r($client->response); 
   return $result; 
} // End getNubix ?>
```

If I was to do this again I would probably try to find a way to send raw XML with the native SOAP library. Unfortunately I did not have time to do this now, but I should definitely do it as an update to the project. I do believe that because of how the NUBIX service works it is not possible to send requests the “simple” way. However, if anyone has examples that might resemble this one, and have a solution, feel free to share it!

As far as SOAP as a protocol my impression is that it is quite good, but maybe not that developed in PHP. As far as I could find, there was not that many resources around, but then again, I might have worked towards a special web service?
