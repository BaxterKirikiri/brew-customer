# Brew Overview

Brew is a system made of two React PWAs. One is used by the cafe operator and one is used by customers. The idea is that Brew replaces the use of physical loyalty cards with a digital app. The basic usage goes as follows: 

1.) Customer signs in to the customer app on their phone.  

2.) A QR code is generated that links to the cafe version of the app, containing the customers id.  

3.) When the customer buys a coffee, the cafe operator scans the customers QR code, opening the cafe app 
and allowing them to adjust loyalty appropriately. 

4.) The customer can check the app to see a real time representation of their loyalty progress.  

## Brew Customer
The customer version of the brew app is where the customers can check their loyalty progress and show their QR code to the cafe. The customers login using their google account and are shown loyalty progress in the form of colored in or greyed out coffee cups from Font Awesome. They can then either sign out or press 'check progress' to check if their loyalty progress has updated.

## Technologies used
Brew customer is a react based progressive web app. It was created from the basic create-react-app. This means code was written in a mix of Javascript, HTML, CSS and JSX. It also utilizes node.js packages like the firebase cli, Font Awesome icons, and qrcode.react (converts urls to qrcodes). 

Brew customer utilizes firebase services via the firebase CLI. Specifically it uses firebase hosting to host the app, firebase authentication to allow users to login with their google account and real time sync firestore to store customer loyalty progress and link it to their google account.  
