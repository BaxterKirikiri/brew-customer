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

## Future Plans
Currently, there are no plans to continue this project in the future. This app was originally created for my high school cafe, however, by the time it was in a usable state, I was already close to the end of my last year. However, if I were to continue this project, I would implement the following:

1.) Expand beyond just coffee, allow the customer app to show more than just one cafe's loyalty progress. Adding a sidebar to switch between establishments. Each establishment could have its own custom color scheme and logo.

2.) Statistics recording to show customer information such as, how many (product)s they have received for free or how much they have saved by using a loyalty service. These would be displayed at the bottom of the screen in a kind of 'Did you know?' section.

3.) Creating an android widget so that users could see their progress from their home screen.

## Lessons Learned
This was my first major web development project. Throughout development, I have learned a lot about web languages like javascript and HTML. However, I am still working on these areas as I feel more comfortable with languages like java and lua that I have learned in school. 

I have also gained an understanding of how to introduce APIs into my projects using node.js and specifically how to use the services provided by the firebase API. 

I think that the most important lesson learned during this project is the idea of self teaching using online resources. I found that following React App and Firebase tutorials was very helpful during the development of this project.

If I were to do this project again, I think that I would try to actively use an agile development mindset. Back when I started this project, I had a set idea of what I wanted the app to look like and what it should do. I didn't really consider if other people thought the same way or if the way I intended to implement the idea was optimal. After attending a development workshop called Create Camp I realized the importance of checking with stakeholders and regularly stopping development to check if the plans I had made were still viable. I believe, had I known what I know now, the project would have been completed early enough to be used by the school cafe
